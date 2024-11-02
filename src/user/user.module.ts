import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import {
  Connection,
  MongoDbConnection,
  MySqlConnection,
} from './connection/connection';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: Connection,
      useClass: 'mysql' === 'mysql' ? MySqlConnection : MongoDbConnection,
    },
  ],
})
export class UserModule {}
