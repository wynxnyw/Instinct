import { UniqueEmailConstraint } from './unique-email.constraint';

export * from './unique-email.constraint';
export * from './user-exists.constraint';
export * from './unique-username.constraint';
import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';


export const userConstraints:Validator = [
  UniqueEmailConstraint,
]