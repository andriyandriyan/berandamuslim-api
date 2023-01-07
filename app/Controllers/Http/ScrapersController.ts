/* eslint-disable @typescript-eslint/naming-convention */
import Database from '@ioc:Adonis/Lucid/Database';
import Article from 'App/Models/Article';
import ArticleCategory from 'App/Models/ArticleCategory';
import Source from 'App/Models/Source';
import axios, { AxiosRequestConfig } from 'axios';
import { Post, WpTerm } from 'interfaces';
import { DateTime } from 'luxon';

export default class ScrapersController {
  public async articles() {
    const perPage = 10;
    const sources = await Source.query().withCount('articles');
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    await Database.transaction(async trx => {
      const getPosts: Promise<{ source: Source; posts: Post[] }>[] = [];
      const storePosts: Promise<void>[] = [];
      sources.forEach(source => {
        getPosts.push(
          new Promise<{ source: Source; posts: Post[] }>(async (resolve, reject) => {
            const baseURL = `https://${source.url}`;
            const url = 'wp-json/wp/v2/posts';
            const config: AxiosRequestConfig = {
              headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
              baseURL,
            };
            const { headers } = await axios.get(url, {
              ...config,
              params: {
                _fields: ['id'],
                per_page: 1,
              },
            });
            const total = headers['x-wp-total'] || 0;
            const articlesCount = source.$extras.articles_count;
            if (total === articlesCount) {
              return resolve({ source, posts: [] });
            }
            const lastPage = Math.ceil(articlesCount / perPage);
            const mod = articlesCount % perPage;
            const page = mod > 0 ? lastPage : lastPage + 1;
            await source
              .merge({ articleSourcesCount: Number(total) })
              .useTransaction(trx)
              .save();
            try {
              const { data } = await axios.get<Post[]>(url, {
                ...config,
                params: {
                  orderby: 'id',
                  order: 'asc',
                  per_page: perPage,
                  page,
                  _fields: [
                    'id',
                    'title',
                    'date',
                    'modified',
                    'link',
                    '_links.wp:featuredmedia',
                    '_links.wp:term',
                  ],
                  _embed: 'wp:featuredmedia,wp:term',
                },
              });
              const posts = data.slice(mod);
              resolve({ source, posts });
            } catch (error) {
              reject(error);
            }
          })
        );
      });
      const sourcePosts = await Promise.all(getPosts);
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '1';
      const categories: Pick<WpTerm, 'slug' | 'name'>[] = [];
      sourcePosts.forEach(({ posts }) => {
        posts.forEach(post => {
          const { _embedded } = post;
          const terms = _embedded?.['wp:term'].flatMap(term => term) || [];
          const term = terms.find(term => term.taxonomy === 'category');
          const isExist = categories.some(category => category.slug === term?.slug);
          if (term && !isExist) {
            categories.push({
              slug: term.slug,
              name: term.name,
            });
          }
        });
      });
      const articleCategories = await ArticleCategory.fetchOrCreateMany('slug', categories, {
        client: trx,
      });
      sourcePosts.forEach(({ source, posts }) => {
        storePosts.push(
          new Promise<void>(async resolve => {
            await Article.createMany(
              posts.map(post => {
                const { _embedded } = post;
                const terms = _embedded?.['wp:term'].flatMap(term => term) || [];
                const category = terms.find(term => term.taxonomy === 'category');
                const articleCategory = articleCategories.find(
                  ({ slug }) => slug === category?.slug
                );
                const tags = terms.filter(term => term.taxonomy === 'post_tag');
                const date = DateTime.fromISO(post.date);
                const modified = DateTime.fromISO(post.modified);
                return {
                  title: post.title.rendered.slice(0, 250),
                  image: _embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
                  originArticleId: post.id,
                  articleCategoryId: articleCategory?.id,
                  tags: tags.map(tag => tag.name),
                  sourceUrl: post.link,
                  date,
                  modified: post.modified.startsWith('-0001') ? date : modified,
                  sourceId: source.id,
                };
              }),
              { client: trx }
            );
            resolve();
          })
        );
      });
      await Promise.all(storePosts);
    });
    return { message: 'success' };
  }
}
