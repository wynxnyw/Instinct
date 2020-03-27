import { IsEmail, IsString, Validate } from 'class-validator';
import { UniqueEmailConstraint } from './constraint/unique-email';
import { UniqueUsernameConstraint } from './constraint/unique-username';

export class NewUserDTO {
  @IsString()
  @Validate(UniqueUsernameConstraint)
  username!: string;

  @IsEmail()
  @Validate(UniqueEmailConstraint)
  email!: string;

  @IsString()
  password!: string;
}
