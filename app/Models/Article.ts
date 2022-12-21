import { beforeCreate, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Services/CamelCaseNamingStrategy';
import { DateTime } from 'luxon';
import { nanoid } from 'nanoid';
import Model from './Model';
import Source from './Source';

export default class Article extends Model {
  public static namingStrategy = new CamelCaseNamingStrategy();

  @column({ isPrimary: true })
  public id: string;

  @column()
  public title: string;

  @column()
  public image: string | null;

  @column()
  public sourceUrl: string;

  @column()
  public sourceId: number;

  @belongsTo(() => Source)
  public source: BelongsTo<typeof Source>;

  @column.dateTime()
  public publishedAt: DateTime;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @beforeCreate()
  public static async setArticleId(article: Article) {
    // const { nanoid } = await import('nanoid');
    article.id = nanoid(12);
  }
}
