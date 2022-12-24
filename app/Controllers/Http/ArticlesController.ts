import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Database from '@ioc:Adonis/Lucid/Database';
import Article from 'App/Models/Article';
import Source from 'App/Models/Source';
import axios, { AxiosRequestConfig } from 'axios';
import { Post } from 'interfaces';
import { DateTime } from 'luxon';

export default class ArticlesController {
  public async index({ request }: HttpContextContract) {
    const search: string = request.input('search', '');
    const page = request.input('page', 1);
    const perPage = request.input('perPage', 20);
    const data = await Article.query()
      .select('id', 'title', 'image', 'publishedAt', 'sourceId')
      .where(query => {
        if (search) {
          query.whereRaw('fts @@ to_tsquery(:lang, :search)', {
            lang: 'indonesian',
            search: search.split(' ').join(' & '),
          });
        }
      })
      .orderBy('publishedAt', 'desc')
      .preload('source', query => {
        query.select('id', 'name', 'image');
      })
      .paginate(page, perPage);
    return data;
  }

  public async show({ request, response }: HttpContextContract) {
    const data = await Article.findOrFail(request.param('id'));
    response.redirect().toPath(data.sourceUrl);
  }

  public async fetchArticle() {
    const perPage = 20;
    const sources = await Source.query().withCount('articles');
    await Database.transaction(async trx => {
      const promises: Promise<void>[] = [];
      sources.forEach(source => {
        promises.push(
          new Promise<void>(async (resolve, reject) => {
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
              return resolve();
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
                  _fields: ['id', 'title', 'modified_gmt', 'link', '_links.wp:featuredmedia'],
                  _embed: 'wp:featuredmedia',
                },
              });
              await Article.createMany(
                data.slice(mod).map(datum => ({
                  title: datum.title.rendered,
                  image: datum._embedded?.['wp:featuredmedia'][0]?.source_url || null,
                  sourceUrl: datum.link,
                  publishedAt: DateTime.fromISO(datum.modified_gmt),
                  sourceId: source.id,
                })),
                { client: trx }
              );
              resolve();
            } catch (error) {
              reject(error);
            }
          })
        );
      });
      await Promise.all(promises);
    });
    return { message: 'success' };
  }
}
