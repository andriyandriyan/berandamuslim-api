/*
|--------------------------------------------------------------------------
| Http Exception Handler
|--------------------------------------------------------------------------
|
| AdonisJs will forward all exceptions occurred during an HTTP request to
| the following class. You can learn more about exception handling by
| reading docs.
|
| The exception handler extends a base `HttpExceptionHandler` which is not
| mandatory, however it can do lot of heavy lifting to handle the errors
| properly.
|
*/

import Env from '@ioc:Adonis/Core/Env';
import Logger from '@ioc:Adonis/Core/Logger';
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import TelegramBot from 'node-telegram-bot-api';

export default class ExceptionHandler extends HttpExceptionHandler {
  constructor() {
    super(Logger);
  }

  public async report(error: any, ctx: HttpContextContract) {
    if (!this.shouldReport(error)) {
      return;
    }

    if (typeof error.report === 'function') {
      error.report(error, ctx);
      return;
    }
    const token = Env.get('TELEGRAM_ERROR_BOT_TOKEN');
    const bot = new TelegramBot(token);
    await bot.sendMessage(Env.get('TELEGRAM_CHAT_ID'), error.stack);
  }
}
