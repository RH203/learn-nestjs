import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpRedirectResponse,
  Query,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';

import { Request, Response } from 'express';

@Controller('/api/user')
export class UserController {
  private users: User[] = [
    {
      id: 1,
      name: 'Alice Smith',
      email: 'alice.smith@example.com',
    },
    {
      id: 2,
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
    },
    {
      id: 3,
      name: 'Charlie Brown',
      email: 'charlie.brown@example.com',
    },
    {
      id: 4,
      name: 'David Wilson',
      email: 'david.wilson@example.com',
    },
    {
      id: 5,
      name: 'Eve Davis',
      email: 'eve.davis@example.com',
    },
    {
      id: 6,
      name: 'Frank Miller',
      email: 'frank.miller@example.com',
    },
    {
      id: 7,
      name: 'Grace Lee',
      email: 'grace.lee@example.com',
    },
    {
      id: 8,
      name: 'Hank Garcia',
      email: 'hank.garcia@example.com',
    },
    {
      id: 9,
      name: 'Ivy Martinez',
      email: 'ivy.martinez@example.com',
    },
    {
      id: 10,
      name: 'Jack Thomas',
      email: 'jack.thomas@example.com',
    },
  ];

  @Get('/sample-response')
  @Header('Content-Type', 'application/json')
  @HttpCode(200)
  getResponse(): User[] {
    return this.users.map((user: User): User => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
      };
    });
  }

  @Get('/redirect')
  @Redirect()
  redirect(): HttpRedirectResponse {
    return {
      url: 'http://localhost:3000/api/user/sample-response',
      statusCode: 302,
    };
  }

  @Get('/hello-world')
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

  @Get('/set-cookie')
  setCookie(
    @Query('first_name') firstName: string,
    @Query('last_name') lastName: string,
    @Res() response: Response,
  ) {
    response.cookie('first_name', firstName);
    response.cookie('last_name', lastName);
    response.status(200).send('Successfull send cookie');
  }

  @Get('/get-cookie')
  getCookie(@Req() request: Request): string {
    return request.cookies['name'];
  }
}
