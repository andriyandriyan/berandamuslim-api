import { column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Services/CamelCaseNamingStrategy';
import City from './City';
import Model from './Model';

export enum InstagramAccountType {
  INFO_KAJIAN = 'info_kajian',
  POSTER_DAKWAH = 'poster_dakwah',
}

export default class InstagramAccount extends Model {
  public static namingStrategy = new CamelCaseNamingStrategy();

  @column({ isPrimary: true })
  public id: string;

  @column()
  public name: string;

  @column()
  public username: string;

  @column()
  public type: InstagramAccountType;

  @manyToMany(() => City, {
    pivotForeignKey: 'instagramAccountId',
    pivotRelatedForeignKey: 'cityId',
  })
  public cities: ManyToMany<typeof City>;
}
