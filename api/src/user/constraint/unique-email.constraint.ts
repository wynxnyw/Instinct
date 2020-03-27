import { Injectable } from '@nestjs/common';
import { UserService } from '../user.service';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: true })
@Injectable()
export class UniqueEmailConstraint implements ValidatorConstraintInterface {
  constructor(private readonly userService: UserService) {}

  async validate(email: string, validationArguments: ValidationArguments) {
    try {
      await this.userService.getByEmail(email);
      return false;
    } catch {
      return true;
    }
  }

  defaultMessage(args: ValidationArguments) {
    return 'Email is taken';
  }
}
