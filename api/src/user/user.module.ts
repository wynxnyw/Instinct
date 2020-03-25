import { UserPipe } from './user.pipe';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UniqueUsername } from './user-unique.constraint';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserPipe, UserService, UniqueUsername],
  exports: [UserPipe, UserService, UniqueUsername],
})
export class UserModule {}
