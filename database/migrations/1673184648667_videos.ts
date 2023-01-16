import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
  protected tableName = 'videos';

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.string('id', 11).primary();
      table.string('title', 150).notNullable();
      table.text('description').notNullable();
      table.string('thumbnail', 80).notNullable();
      table.string('duration', 16).notNullable();
      table
        .string('channelId', 24)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('channels')
        .onDelete('CASCADE');
      table
        .enum('liveBroadcastContent', ['none', 'live', 'completed', 'upcoming'])
        .defaultTo('none')
        .notNullable();
      table.timestamp('publishedAt', { useTz: true }).notNullable();
      table.timestamp('createdAt', { useTz: true });
      table.dateTime('deletedAt', { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
