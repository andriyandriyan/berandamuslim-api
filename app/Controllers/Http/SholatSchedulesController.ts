import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import SholatScheduleValidator from 'App/Validators/SholatScheduleValidator';
import axios from 'axios';
import { SholatScheduleResponse } from 'interfaces';

export default class SholatSchedulesController {
  public async index({ request, response }: HttpContextContract) {
    const { cityId, date } = await request.validate(SholatScheduleValidator);
    const baseURL = 'https://api.myquran.com/v1';
    const formattedDate = date.toFormat('yyyy/MM/dd');
    const { data } = await axios.get<SholatScheduleResponse>(
      `sholat/jadwal/${cityId}/${formattedDate}`,
      {
        baseURL,
      }
    );
    const { status } = data;
    if (!status) {
      return response.notFound({ message: 'Jadwal tidak ditemukan' });
    }
    const { jadwal } = data.data;
    return {
      date: jadwal.date,
      shubuh: jadwal.subuh,
      syuruq: jadwal.terbit,
      dzuhur: jadwal.dzuhur,
      ashar: jadwal.ashar,
      maghrib: jadwal.maghrib,
      isya: jadwal.isya,
    };
  }
}
