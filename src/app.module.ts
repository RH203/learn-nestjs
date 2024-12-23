import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { WinstonModule } from 'nest-winston';
import { ValidationModule } from './validation/validation.module';
import * as winston from 'winston';
import { LogMiddleware } from './log/log.middleware';

@Module({
  imports: [
    UserModule,
    PrismaModule,
    WinstonModule.forRoot({
      format: winston.format.cli(),
      level: 'debug',
      transports: [new winston.transports.Console()],
    }),
    ValidationModule.forRoot(true),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LogMiddleware).forRoutes({
      path: '/api/*',
      method: RequestMethod.ALL,
    });
  }
}
