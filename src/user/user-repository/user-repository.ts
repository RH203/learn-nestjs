import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma/prisma.service';
import { StudentDto } from '../../dtos/student.dto';

@Injectable()
export class UserRepository {
  constructor(private prismaService: PrismaService) {}

  async saveUser(fisrt_name: string, last_name?: string): Promise<void> {
    try {
      await this.prismaService.user.create({
        data: {
          first_name: fisrt_name,
          last_name: last_name,
        },
      });
    } catch (e) {
      console.error(`User repository [create user]: ${e}`);
      throw e;
    }
  }

  async showUser(): Promise<StudentDto[]> {
    try {
      const users = await this.prismaService.user.findMany();
      return users.map((value) => ({
        firstName: value.first_name,
        lastName: value.last_name,
      }));
    } catch (e) {
      console.error(`User repository [show user]: ${e}`);
      throw e;
    }
  }
}
