import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Article from 'App/Models/Article';

export default class ArticlesController {
  public async index({ request }: HttpContextContract) {
    const search: string = request.input('search', '');
    const page = request.input('page', 1);
    const perPage = request.input('perPage', 20);
    const category = request.input('category', '');
    const data = await Article.query()
      .select(
        'articles.id',
        'title',
        'image',
        'date',
        'sourceId',
        'sourceUrl',
        'articleCategoryId',
        'tags'
      )
      .leftJoin('article_categories', 'article_categories.id', 'articles.articleCategoryId')
      .where(query => {
        if (search) {
          query.whereRaw('fts @@ to_tsquery(:lang, :search)', {
            lang: 'indonesian',
            search: search.trim().split(' ').join(' & '),
          });
        }
        if (category) {
          query.where('article_categories.slug', category);
        }
      })
      .orderBy('date', 'desc')
      .preload('source', query => {
        query.select('id', 'name', 'image', 'url');
      })
      .preload('articleCategory')
      .paginate(page, perPage);
    return data;
  }

  public async show({ request, response }: HttpContextContract) {
    const data = await Article.findOrFail(request.param('id'));
    response.redirect().toPath(data.sourceUrl);
  }
}
