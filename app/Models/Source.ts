import { column } from '@ioc:Adonis/Lucid/Orm';
import Model from './Model';

export default class Source extends Model {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public image: string | null;

  @column()
  public url: string;
}
