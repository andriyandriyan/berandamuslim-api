import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Video from 'App/Models/Video';

export default class VideosController {
  public async index({ request }: HttpContextContract) {
    const search: string = request.input('search', '');
    const page = request.input('page', 1);
    const perPage = request.input('perPage', 30);
    const channelIds: string[] = request.input('channelIds', []);
    const data = await Video.query()
      .select('id', 'title', 'thumbnail', 'duration', 'publishedAt', 'channelId')
      .where(query => {
        if (search) {
          query.whereRaw('videos_fts @@ to_tsquery(:lang, :search)', {
            lang: 'indonesian',
            search: search.trim().split(' ').join(' & '),
          });
        }
        if (channelIds.length) {
          query.whereIn('channelId', channelIds);
        }
      })
      .orderBy('publishedAt', 'desc')
      .preload('channel')
      .paginate(page, perPage);
    return data;
  }

  public async show({ request, response }: HttpContextContract) {
    const data = await Video.findOrFail(request.param('id'));
    response.redirect().toPath(`https://www.youtube.com/watch?v=${data.id}`);
  }
}
