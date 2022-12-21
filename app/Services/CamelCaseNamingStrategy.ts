import { string } from '@ioc:Adonis/Core/Helpers';
import { BaseModel, SnakeCaseNamingStrategy } from '@ioc:Adonis/Lucid/Orm';

export default class CamelCaseNamingStrategy extends SnakeCaseNamingStrategy {
  public columnName(_model: typeof BaseModel, propertyName: string) {
    return string.camelCase(propertyName);
  }

  public serializedName(_model: typeof BaseModel, propertyName: string) {
    return string.camelCase(propertyName);
  }
}
