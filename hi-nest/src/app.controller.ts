import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello')
  sayHello(): string {
    // return 'hello everyone';
    return this.appService.getHi();
  }

  @Post('/post-hello')
  postHello(): string {
    return 'hi-post';
  }
}
