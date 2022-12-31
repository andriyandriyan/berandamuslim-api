import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ArticleCategory from 'App/Models/ArticleCategory';

export default class ArticleCategoriesController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1);
    const perPage = request.input('perPage', 20);
    const data = await ArticleCategory.query().orderBy('name', 'asc').paginate(page, perPage);
    return data;
  }
}
