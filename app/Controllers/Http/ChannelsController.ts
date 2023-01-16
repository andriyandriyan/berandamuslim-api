import Channel from 'App/Models/Channel';

export default class ChannelsController {
  public async index() {
    const data = await Channel.query().orderByRaw('lower(name) asc');
    return { data };
  }
}
