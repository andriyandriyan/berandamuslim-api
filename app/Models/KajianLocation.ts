import { BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Services/CamelCaseNamingStrategy';
import City from './City';
import Model from './Model';

export default class KajianLocation extends Model {
  public static namingStrategy = new CamelCaseNamingStrategy();

  @column({ isPrimary: true })
  public id: string;

  @column()
  public name: string;

  @column()
  public cityId: string;

  @belongsTo(() => City)
  public city: BelongsTo<typeof City>;

  @column()
  public lat: number;

  @column()
  public lng: number;

  @column()
  public address: string;
}
