import { BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Services/CamelCaseNamingStrategy';
import { DateTime } from 'luxon';
import Channel from './Channel';
import Model from './Model';

export enum LiveBroadcastContent {
  NONE = 'none',
  LIVE = 'live',
  COMPLETED = 'complted',
  UPCOMING = 'upcoming',
}

export default class Video extends Model {
  public static namingStrategy = new CamelCaseNamingStrategy();

  @column({ isPrimary: true })
  public id: string;

  @column()
  public title: string;

  @column()
  public description: string;

  @column()
  public thumbnail: string;

  @column()
  public duration: string;

  @column()
  public channelId: string;

  @belongsTo(() => Channel)
  public channel: BelongsTo<typeof Channel>;

  @column()
  public liveBroadcastContent: LiveBroadcastContent;

  @column.dateTime()
  public publishedAt: DateTime;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;
}
