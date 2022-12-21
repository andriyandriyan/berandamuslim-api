import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
  protected tableName = 'sources';

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.increments('id').primary();
      table.string('name', 30).notNullable();
      table.string('image', 100).nullable();
      table.string('url', 30).notNullable();
      table.dateTime('deleted_at', { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
