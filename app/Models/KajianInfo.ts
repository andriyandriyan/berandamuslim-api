import { BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Services/CamelCaseNamingStrategy';
import { DateTime } from 'luxon';
import City from './City';
import InstagramAccount from './InstagramAccount';
import Model from './Model';

export default class KajianInfo extends Model {
  public static namingStrategy = new CamelCaseNamingStrategy();

  @column({ isPrimary: true })
  public id: string;

  @column()
  public image: string;

  @column()
  public instagramAccountId: string;

  @belongsTo(() => InstagramAccount)
  public instagramAccount: BelongsTo<typeof InstagramAccount>;

  @column()
  public mapId: string;

  @column()
  public cityId?: string;

  @belongsTo(() => City)
  public city: BelongsTo<typeof City>;

  @column.dateTime()
  public performedAt?: DateTime;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;
}
