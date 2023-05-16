import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
  protected tableName = 'kajian_info';

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.string('id', 11).primary();
      table.text('image').notNullable();
      table
        .string('instagramAccountId', 11)
        .notNullable()
        .references('id')
        .inTable('instagram_accounts')
        .onDelete('CASCADE');
      table.string('mapId', 30).index().notNullable();
      table.string('cityId', 4).nullable().references('id').inTable('cities').onDelete('CASCADE');
      table.dateTime('performedAt').nullable();
      table.timestamp('createdAt', { useTz: true });
      table.dateTime('deletedAt', { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
