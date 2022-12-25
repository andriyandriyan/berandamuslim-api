import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class SholatScheduleValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    cityId: schema.number(),
    date: schema.date({
      format: 'yyyy-MM-dd',
    }),
  });

  public messages: CustomMessages = {
    'cityId.required': 'Kota harus diisi',
    'date.required': 'Tanggal harus diisi',
    'date.format': 'Format tanggal harus Y-m-d',
  };
}
