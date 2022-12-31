import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Source from 'App/Models/Source';

export default class extends BaseSeeder {
  public async run() {
    await Source.createMany([
      {
        name: 'Rumaysho',
        url: 'rumaysho.com',
        articleSourcesCount: 0,
        image:
          'https://uwrjqsxjobvduikikpgr.supabase.co/storage/v1/object/public/berandamuslim/sources/logo-rumaysho.png',
      },
      {
        name: 'Ruqoyyah',
        url: 'ruqoyyah.com',
        articleSourcesCount: 0,
        image:
          'https://uwrjqsxjobvduikikpgr.supabase.co/storage/v1/object/public/berandamuslim/sources/logo-ruqoyyah.png',
      },
      {
        name: 'Almanhaj',
        url: 'almanhaj.or.id',
        articleSourcesCount: 0,
        image:
          'https://uwrjqsxjobvduikikpgr.supabase.co/storage/v1/object/public/berandamuslim/sources/logo-almanhaj.png',
      },
      {
        name: 'muslim.or.id',
        url: 'muslim.or.id',
        articleSourcesCount: 0,
        image:
          'https://uwrjqsxjobvduikikpgr.supabase.co/storage/v1/object/public/berandamuslim/sources/logo-muslim-or-id.webp',
      },
      {
        name: 'muslimah.or.id',
        url: 'muslimah.or.id',
        articleSourcesCount: 0,
        image:
          'https://uwrjqsxjobvduikikpgr.supabase.co/storage/v1/object/public/berandamuslim/sources/logo-muslimah-or-id.webp',
      },
      {
        name: 'muslimAfiyah',
        url: 'muslimafiyah.com',
        articleSourcesCount: 0,
        image:
          'https://uwrjqsxjobvduikikpgr.supabase.co/storage/v1/object/public/berandamuslim/sources/logo-muslimafiyah.png',
      },
      {
        name: 'KonsultasiSyariah',
        url: 'konsultasisyariah.com',
        articleSourcesCount: 0,
      },
      {
        name: 'Remaja Islam',
        url: 'remajaislam.com',
        articleSourcesCount: 0,
        image:
          'https://uwrjqsxjobvduikikpgr.supabase.co/storage/v1/object/public/berandamuslim/sources/logo-remaja-islam.png',
      },
      {
        name: 'Ustadz DR. Aris Munandar',
        url: 'ustadzaris.com',
        articleSourcesCount: 0,
        image:
          'https://uwrjqsxjobvduikikpgr.supabase.co/storage/v1/object/public/berandamuslim/sources/logo-ustadz-aris.png?t=2022-12-30T15%3A21%3A13.051Z',
      },
      {
        name: 'Nasehat.net',
        url: 'nasehat.net',
        articleSourcesCount: 0,
      },
      {
        name: 'PengusahaMuslim.com',
        url: 'pengusahamuslim.com',
        articleSourcesCount: 0,
      },
      {
        name: 'KhotbahJumat.com',
        url: 'khotbahjumat.com',
        articleSourcesCount: 0,
      },
      {
        name: 'CaraSholat.com',
        url: 'carasholat.com',
        articleSourcesCount: 0,
      },
      {
        name: 'Buletin At Tauhid',
        url: 'buletin.muslim.or.id',
        articleSourcesCount: 0,
        image:
          'https://uwrjqsxjobvduikikpgr.supabase.co/storage/v1/object/public/berandamuslim/sources/logo-buletin-attauhid.png?t=2022-12-30T15%3A21%3A33.465Z',
      },
    ]);
  }
}
