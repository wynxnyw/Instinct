import { UserPipe } from './user.pipe';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { CommonModule } from '../common/common.module';
import { DatabaseModule } from '../database/database.module';
import { UniqueEmailConstraint, UniqueUsernameConstraint, UserExistsConstraint } from './constraint';

@Module({
  imports: [CommonModule, DatabaseModule],
  controllers: [UserController],
  providers: [UserPipe, UserService, UniqueUsernameConstraint, UserExistsConstraint],
  exports: [UserPipe, UserService, UniqueUsernameConstraint, UserEmailC],
})
export class UserModule {}
