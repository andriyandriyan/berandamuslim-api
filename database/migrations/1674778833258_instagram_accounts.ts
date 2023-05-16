import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
  protected tableName = 'instagram_accounts';

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.string('id', 10).primary();
      table.string('name', 80).notNullable();
      table.string('username', 40).notNullable();
      table.enum('type', ['info_kajian', 'poster_dakwah']).notNullable().defaultTo('info_kajian');
      table.dateTime('deletedAt', { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
