import Source from 'App/Models/Source';

export default class SourcesController {
  public async index() {
    const data = await Source.query().orderByRaw('lower(name) asc');
    return { data };
  }
}
