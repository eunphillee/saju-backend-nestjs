import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Working! 11-13(2)';
  }

  @Get('/test/error')
  getTestError(): string {
    throw new HttpException(
      '500 server error test',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
