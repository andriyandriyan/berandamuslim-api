import { BaseModel, beforeFetch, beforeFind, beforePaginate, column } from '@ioc:Adonis/Lucid/Orm';
import { softDelete, softDeletePaginateQuery, softDeleteQuery } from 'App/Services/SoftDelete';
import { DateTime } from 'luxon';

export default class Model extends BaseModel {
  @column.dateTime({ serializeAs: null })
  public deletedAt: DateTime;

  @beforeFind()
  public static softDeletesFind = softDeleteQuery;

  @beforeFetch()
  public static softDeletesFetch = softDeleteQuery;

  @beforePaginate()
  public static softDeletesPaginate = softDeletePaginateQuery;

  public async delete(column?: string) {
    await softDelete(this, column);
  }
}
