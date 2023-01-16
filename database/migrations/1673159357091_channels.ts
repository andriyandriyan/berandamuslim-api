import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
  protected tableName = 'channels';

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.string('id', 24).primary();
      table.string('name', 80).notNullable();
      table.string('customUrl', 40).notNullable();
      table.string('image', 150).notNullable();
      table.dateTime('deletedAt', { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
