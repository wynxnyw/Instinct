import { User } from '../../interface/user';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export function userWire(userEntity: UserEntity): User {
  return {
    id: userEntity.id!,
    username: userEntity.username,
  };
}

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  username!: string;
}
