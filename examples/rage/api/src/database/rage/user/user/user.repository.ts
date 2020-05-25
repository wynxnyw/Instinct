import * as Random from 'randomstring';
import {UserEntity} from './user.entity';
import {Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {HashService} from '../../../../common/hash.service';
import { Like, Repository, SelectQueryBuilder } from 'typeorm';

@Injectable()
export class UserRepository{

  readonly eagerRelations: string[] = [];

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    private readonly hashService: HashService
  ) {}

  async createAndReturn(user: UserEntity): Promise<UserEntity> {
    const newUser: UserEntity = await this.userRepo.save({
      ...user,
      password: this.hashService.generate(user.password),
    });
    return this.findOneByIDOrFail(newUser.id!);
  }

  async authenticateClientByID(userID: number): Promise<string> {
    const authTicket: string = 'instinct_' + Random.generate(20) + '_' + userID;
    await this.userRepo.update(userID, {authTicket});
    return authTicket;
  }

  findOneByIDOrFail(userID: number): Promise<UserEntity> {
    return this.userRepo.findOneOrFail({
      where: {
        id: userID,
      },
      relations: this.eagerRelations,
    });
  }

  findOneByUsernameOrFail(username: string): Promise<UserEntity> {
    return this.userRepo.findOneOrFail({
      where: {
        username,
      },
      relations: this.eagerRelations,
    });
  }

  findOneByEmailOrFail(email: string): Promise<UserEntity> {
    return this.userRepo.findOneOrFail({
      where: {
        email,
      },
      relations: this.eagerRelations,
    });
  }

  searchByUsername(username: string): Promise<UserEntity[]> {
    return this.userRepo.find({
      where: {
        username: Like(`%${username}%`),
      },
      relations: this.eagerRelations,
    });
  }

  getQueryBuilder(): SelectQueryBuilder<UserEntity> {
    return this.userRepo.createQueryBuilder('user');
  }

}


