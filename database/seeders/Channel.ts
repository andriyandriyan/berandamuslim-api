import { youtube } from '@googleapis/youtube';
import Env from '@ioc:Adonis/Core/Env';
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Channel from 'App/Models/Channel';

export default class extends BaseSeeder {
  public async run() {
    const { data } = await youtube({
      version: 'v3',
      auth: Env.get('YOUTUBE_API_KEY'),
    }).channels.list({
      part: ['id', 'snippet'],
      id: [
        'UCJJ1iBTlStAWoBZIPH6fPYA',
        'UC6c15GN6fw8ASTBKjODgtcw',
        'UCg8JzBjneud5yc-2AM384cg',
        'UC-tEtTRwEpRmlo26dGTpanA',
        'UCZLEB_Oux4yjwV2YIhAlPyQ',
        'UCA-DcMSqd6ELckh4BzHin7g',
        'UCWcErqFw28UlHluawiWLO2g',
        'UCm44PmruoSbuNbZn7jFeXUw',
        'UC7BhBmc2rQ8gT0nUswLbEAw',
        'UCCE_ie7v0Pjfn_uTtfiOGbw',
        'UCOs1jhRVS-FaZkn53vCwsxg',
        'UCE1GM8_QKuXupvp5T4uIqqg',
        'UCJHC3VbFsp7kJ2NxPGltwiw',
        'UCB_4eiarzac17AXNL_FeN2g',
        'UCem4zrffr93cp-o8cOPDhdQ',
        'UCZHbLWGrq43F0-5Ef37CpWQ',
        'UClEQ0d9hCgMCQM1FDt54Yzg',
        'UCkrLd1cy4AUOp1pAdu1Ru7Q',
        'UCP-tWGFUAmVWFz4XyHDz07A',
        'UC42PJ3sXqYJwSMPtiWCTfew',
        'UCUWjIsAyEPkGDGzwSKYeuag',
        'UCBomWtcsP4PumQOaOTmXXGw',
        'UC3_QdDQnRVRDJzq56JTO_Zw',
        'UCM73P3XvOfj0HjC97KKYW5g',
        'UCYB3DxQl4dgBUOy1_q6gMJw',
        'UCX-4mrOc5r691SzDhHtkOgw',
        'UCiTK5pzTj6BMIO14YYLA_jA',
        'UC841fG_76NhCLy6Kt1XI87Q',
        'UCAyydyIHdb5hK_Xv-zAGaBQ',
        'UCZKdGiqmTF9P1bRdLT717kg',
        'UCSYz7VK6L8gUagotPbBngPQ',
        'UCq10f2VToBrtrsS5hPzIheg',
        'UCU_18YfmSUI_2NH1fpFf1jw',
        'UCUVoFiYKV4tGh9Z8R1FHRqw',
        'UCOLzop5XFSa4sn7XodYDrKg',
        'UCFmTr7NBAX556zo76DXxfsg',
        'UC6Diy76KB5WeJF5j60_3pEA',
      ],
    });
    if (data.items) {
      await Channel.createMany(
        data.items.map(item => {
          const { id, snippet } = item;
          return {
            id: id!,
            name: snippet!.title!,
            image: snippet!.thumbnails!.medium!.url!,
            customUrl: snippet!.customUrl!.replace('@', ''),
          };
        })
      );
    }
  }
}
