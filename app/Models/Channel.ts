import { column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Services/CamelCaseNamingStrategy';
import Model from './Model';
import Video from './Video';

export default class Channel extends Model {
  public static namingStrategy = new CamelCaseNamingStrategy();

  @column({ isPrimary: true })
  public id: string;

  @column()
  public name: string;

  @column()
  public image: string;

  @column()
  public customUrl: string;

  @hasMany(() => Video)
  public videos: HasMany<typeof Video>;
}
