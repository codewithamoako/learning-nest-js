import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Test1Module } from './test1/test1.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [Test1Module, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
