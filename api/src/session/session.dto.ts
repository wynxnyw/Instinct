import { IsString, Validate } from 'class-validator';
import { UserExists } from '../user/user-exists.constraint';

export class NewSessionDTO {

  @IsString()
  @Validate(UserExists)
  username!: string;

  @IsString()
  password!: string;

}