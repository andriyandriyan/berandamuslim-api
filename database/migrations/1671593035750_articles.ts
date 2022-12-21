import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
  protected tableName = 'articles';

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.string('id', 12).primary();
      table.string('title', 180).notNullable();
      table.string('image').nullable();
      table.string('sourceUrl').notNullable();
      table
        .integer('sourceId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('sources')
        .onDelete('CASCADE');
      table.dateTime('publishedAt', { useTz: true }).notNullable();
      table.timestamp('createdAt', { useTz: true });
      table.dateTime('deletedAt', { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
