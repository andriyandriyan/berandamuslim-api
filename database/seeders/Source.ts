import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Source from 'App/Models/Source';

export default class extends BaseSeeder {
  public async run() {
    await Source.createMany([
      {
        name: 'Rumaysho',
        url: 'rumaysho.com',
      },
      {
        name: 'Ruqoyyah',
        url: 'ruqoyyah.com',
      },
      {
        name: 'Almanhaj',
        url: 'almanhaj.or.id',
      },
      {
        name: 'muslim.or.id',
        url: 'muslim.or.id',
      },
      {
        name: 'muslimah.or.id',
        url: 'muslimah.or.id',
      },
      {
        name: 'Muslimafiyah',
        url: 'muslimafiyah.com',
      },
      {
        name: 'KonsultaSisyariah',
        url: 'konsultasisyariah.com',
      },
      {
        name: 'Remaja Islam',
        url: 'remajaislam.com',
      },
      {
        name: 'Ustadz DR. Aris Munandar',
        url: 'ustadzaris.com',
      },
      {
        name: 'Nasehat.net',
        url: 'nasehat.net',
      },
      {
        name: 'PengusahaMuslim.com',
        url: 'pengusahamuslim.com',
      },
      {
        name: 'KhotbahJumat.com',
        url: 'khotbahjumat.com',
      },
      {
        name: 'CaraSholat.com',
        url: 'carasholat.com',
      },
      {
        name: 'Buletin At Tauhid',
        url: 'buletin.muslim.or.id',
      },
    ]);
  }
}
