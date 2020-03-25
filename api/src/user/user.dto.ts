import { UniqueUsername } from './user-unique.constraint';
import { IsEmail, IsString, Validate } from 'class-validator';

export class NewUserDTO {
  @IsString()
  @Validate(UniqueUsername)
  username!: string;

  @IsEmail()
  email!: string;

  @IsString()
  password!: string;
}
