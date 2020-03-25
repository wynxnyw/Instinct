import { UserPipe } from './user.pipe';
import { NewUserDTO } from './user.dto';
import { User } from '../interface/user';
import { UserService } from './user.service';
import { UserEntity, userWire } from '../database/entity';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() newUser: NewUserDTO): Promise<User> {
    const user: UserEntity = await this.userService.create(newUser);
    return userWire(user);
  }

  @Get(':userID')
  getUserByID(@Param('userID', UserPipe) user: UserEntity): User {
    return userWire(user);
  }
}
