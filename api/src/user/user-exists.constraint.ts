import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint()
@Injectable()
export class UserExists implements ValidatorConstraintInterface {
  constructor(private readonly userService: UserService) {}

  async validate(username: string, validationArguments: ValidationArguments) {
    try {
      await this.userService.getByUsername(username);
      return false;
    } catch (e) {
      console.log(e);
      return true;
    }
  }

  defaultMessage(args: ValidationArguments) {
    return 'User does not exist';
  }
}
