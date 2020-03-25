import { Repository } from 'typeorm';
import { UserEntity } from '../database';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  create(user: Partial<UserEntity>): Promise<UserEntity> {
    return this.userRepository.save(user);
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
