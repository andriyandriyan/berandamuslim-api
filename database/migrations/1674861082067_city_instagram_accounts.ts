import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
  protected tableName = 'city_instagram_account';

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.increments('id').primary();
      table
        .string('cityId', 4)
        .notNullable()
        .references('id')
        .inTable('cities')
        .onDelete('CASCADE');
      table
        .string('instagramAccountId', 11)
        .notNullable()
        .references('id')
        .inTable('instagram_accounts')
        .onDelete('CASCADE');
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
