import { Repository } from 'typeorm';
import { UserEntity } from '../database';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HashService } from '../common/hash.service';

@Injectable()
export class UserService {
  constructor(
    private readonly hashService: HashService,

    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  create(user: UserEntity): Promise<UserEntity> {
    return this.userRepository.save({
      ...user,
      password: this.hashService.generate(user.password),
    });
  }

  getByID(userID: number): Promise<UserEntity> {
    return this.userRepository.findOneOrFail(userID);
  }

  getByUsername(username: string): Promise<UserEntity> {
    return this.userRepository.findOneOrFail({
      where: {
        username,
      },
    });
  }
}
