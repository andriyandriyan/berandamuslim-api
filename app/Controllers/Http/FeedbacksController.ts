import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema } from '@ioc:Adonis/Core/Validator';
import Feedback from 'App/Models/Feedback';

export default class FeedbacksController {
  public async store({ request }: HttpContextContract) {
    const payload = await request.validate({
      schema: schema.create({
        name: schema.string(),
        message: schema.string(),
      }),
    });
    const data = await Feedback.create(payload);
    return { data };
  }
}
