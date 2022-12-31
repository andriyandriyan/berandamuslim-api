import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
  protected tableName = 'article_categories';

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.increments('id').primary();
      table.string('slug', 50).unique().notNullable();
      table.string('name', 70).notNullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
