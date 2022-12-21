import { column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Services/CamelCaseNamingStrategy';
import Article from './Article';
import Model from './Model';

export default class Source extends Model {
  public static namingStrategy = new CamelCaseNamingStrategy();

  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public image: string | null;

  @column()
  public url: string;

  @column()
  public articleSourcesCount: number;

  @hasMany(() => Article)
  public articles: HasMany<typeof Article>;
}
