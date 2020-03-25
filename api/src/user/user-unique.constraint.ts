import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint()
@Injectable()
export class UniqueUsername implements ValidatorConstraintInterface {
  constructor(private readonly userService: UserService) {}

  async validate(username: string, validationArguments: ValidationArguments) {
    try {
      await this.userService.getByUsername(username);
      return true;
    } catch {
      return false;
    }
  }

  defaultMessage(args: ValidationArguments) {
    return 'Username is taken';
  }
}
