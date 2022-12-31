import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Services/CamelCaseNamingStrategy';
import { DateTime } from 'luxon';

export default class Feedback extends BaseModel {
  public static namingStrategy = new CamelCaseNamingStrategy();

  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public message: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;
}
