import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  seyHello(name: string): string {
    return `Hello ${name} dari service!`;
  }
}
