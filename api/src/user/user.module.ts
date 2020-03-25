import { UserPipe } from './user.pipe';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserExists } from './user-exists.constraint';
import { CommonModule } from '../common/common.module';
import { UniqueUsername } from './user-unique.constraint';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [CommonModule, DatabaseModule],
  controllers: [UserController],
  providers: [UserPipe, UserService, UniqueUsername, UserExists],
  exports: [UserPipe, UserService, UniqueUsername, UserExists],
})
export class UserModule {}
