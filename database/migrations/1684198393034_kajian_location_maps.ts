import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
  protected tableName = 'kajian_location_maps';

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.bigIncrements('id').primary();
      table
        .string('kajianLocationId', 11)
        .notNullable()
        .references('id')
        .inTable('instagram_accounts')
        .onDelete('CASCADE');
      table.string('mapId', 30).index().notNullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
