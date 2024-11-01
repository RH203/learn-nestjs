import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('/api/user')
export class UserController {
  @Get()
  get(): string {
    return 'Hello World!';
  }

  // @Get('/:name')
  // getByName(@Param('name') name: string): string {
  //   return `Halo ${name}, bagaimana kabar mu?`;
  // }

  @Get('/nama')
  getByQuery(
    @Query('first_name') firstName: string,
    @Query('last_name') lastName: string,
  ): object {
    return { message: `Apa kabar ${firstName} ${lastName}` };
  }
}
