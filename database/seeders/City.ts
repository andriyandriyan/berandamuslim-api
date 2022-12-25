import { string } from '@ioc:Adonis/Core/Helpers';
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import City from 'App/Models/City';
import cities from './cities';

export default class extends BaseSeeder {
  public async run() {
    await City.createMany(
      cities.map(city => ({
        id: city.id,
        name: string.capitalCase(city.name).replace('Kab ', 'Kab. '),
      }))
    );
  }
}
