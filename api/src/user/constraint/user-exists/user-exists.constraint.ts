import { Injectable } from '@nestjs/common';
import { UserService } from '../../user.service';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: true })
@Injectable()
export class UserExistsConstraint implements ValidatorConstraintInterface {
  constructor(private readonly userService: UserService) {}

  async validate(username: string) {
    try {
      await this.userService.getByUsername(username);
      return true;
    } catch {
      return false;
    }
  }

  defaultMessage() {
    return 'User does not exist';
  }
}
