import { User } from '../../../interface/user';
import { ArticleEntity } from '../article/article.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @OneToMany(
    () => ArticleEntity,
    article => article.author,
  )
  articles?: ArticleEntity[];
}
