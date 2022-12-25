import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
  protected tableName = 'cities';

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.string('id', 4).primary();
      table.string('name', 40).notNullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
