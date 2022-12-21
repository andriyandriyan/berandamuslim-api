import { BaseModel, LucidRow, ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm';
import { DateTime } from 'luxon';

export const softDeleteQuery = (query: ModelQueryBuilderContract<typeof BaseModel>) => {
  query.whereNull(`${query.model.table}.deleted_at`);
};

export const softDeletePaginateQuery = ([countQuery]: [
  ModelQueryBuilderContract<typeof BaseModel>
]) => {
  countQuery.whereNull(`${countQuery.model.table}.deleted_at`);
};

export const softDelete = async (row: LucidRow, column = 'deletedAt') => {
  row[column] = DateTime.local();
  await row.save();
  return;
};
