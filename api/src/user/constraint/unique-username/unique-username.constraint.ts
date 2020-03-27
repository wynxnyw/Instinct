import { Injectable } from '@nestjs/common';
import { UserService } from '../../user.service';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: true })
@Injectable()
export class UniqueUsernameConstraint implements ValidatorConstraintInterface {
  constructor(private readonly userService: UserService) {}

  async validate(username: string) {
    try {
      await this.userService.getByUsername(username);
      return false;
    } catch {
      return true;
    }
  }

  defaultMessage() {
    return 'Username is taken';
  }
}
