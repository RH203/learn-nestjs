import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import {
  Connection,
  MongoDbConnection,
  MySqlConnection,
} from './connection/connection';
import { UserRepository } from './user-repository/user-repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [UserController],
  imports: [PrismaModule],
  providers: [
    UserService,
    UserRepository,
    // {
    //   provide: Connection,
    //   useClass: 'mysql' === 'mysql' ? MySqlConnection : MongoDbConnection,
    // },
    // {
    //   provide: MailService,
    //   useFactory: mailService,
    // },
    // {
    //   provide: 'EmailService',
    //   useExisting: MailService,
    // },
  ],
})
export class UserModule {}
