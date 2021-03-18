import { Controller, Get /* ,Header */ ,Post ,Render, Request, UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local.auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }

  @Get('render')
  @Render('index')
  view(){}

  @Get()
 // @Header('content-type','text/html') => nest track the header no need to use @Header()
  getHello(): string {
    return this.appService.getHello();
  }
}
