import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
  protected tableName = 'kajian_locations';

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.string('id', 11).primary();
      table.string('name', 80).notNullable();
      table.decimal('lat', 10, 8).notNullable();
      table.decimal('lng', 11, 8).notNullable();
      table
        .string('cityId', 4)
        .notNullable()
        .references('id')
        .inTable('cities')
        .onDelete('CASCADE');
      table.text('address').notNullable();
      table.timestamp('createdAt', { useTz: true });
      table.dateTime('deletedAt', { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
