import { Injectable } from '@nestjs/common';
import { UserService } from '../../user.service';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: true })
@Injectable()
export class UniqueEmailConstraint implements ValidatorConstraintInterface {
  constructor(private readonly userService: UserService) {}

  async validate(email: string) {
    try {
      await this.userService.getByEmail(email);
      return false;
    } catch {
      return true;
    }
  }

  defaultMessage() {
    return 'Email is taken';
  }
}
