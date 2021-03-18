import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as moment from 'moment'
@Injectable()
export class AppMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`Request to .. ${req.protocol}://${req.get('host')}${req.url}:[${moment().format()}]`);
    console.log(req.connection.remoteAddress); //[req.ip] for short
    next();
  }
}
