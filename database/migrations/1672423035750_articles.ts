import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
  protected tableName = 'articles';

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.string('id', 12).primary();
      table.string('title', 180).notNullable();
      table.string('image').nullable();
      table.integer('originArticleId').unsigned().notNullable();
      table.string('sourceUrl').notNullable();
      table
        .integer('sourceId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('sources')
        .onDelete('CASCADE');
      table
        .integer('articleCategoryId')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('article_categories')
        .onDelete('CASCADE');
      table.specificType('tags', 'VARCHAR[]').nullable();
      table.dateTime('date', { useTz: true }).notNullable();
      table.dateTime('modified', { useTz: true }).notNullable();
      table.timestamp('createdAt', { useTz: true });
      table.dateTime('deletedAt', { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
