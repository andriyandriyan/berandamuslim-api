import Database from '@ioc:Adonis/Lucid/Database';
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import InstagramAccount, { InstagramAccountType } from 'App/Models/InstagramAccount';

export default class extends BaseSeeder {
  public async run() {
    await Database.transaction(async trx => {
      const instagramAccount = await InstagramAccount.create(
        {
          id: '3424386146',
          username: 'kajiansunnah_bekasi',
          name: 'KAJIAN SUNNAH BEKASI',
          type: InstagramAccountType.INFO_KAJIAN,
        },
        { client: trx }
      );
      await instagramAccount.related('cities').attach(['1221', '1203']);
    });
  }
}
