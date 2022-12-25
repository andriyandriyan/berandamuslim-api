import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import City from 'App/Models/City';

export default class CitiesController {
  public async index({ request }: HttpContextContract) {
    const search: string = request.input('search', '');
    const data = await City.query()
      .where(query => {
        if (search) {
          query.whereILike('name', `%${search}%`);
        }
      })
      .orderBy('name', 'asc')
      .paginate(1, 20);
    return data;
  }
}
