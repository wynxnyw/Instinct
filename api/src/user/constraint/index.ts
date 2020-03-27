import { UniqueEmailConstraint } from './unique-email.constraint';

export * from './unique-email.constraint';
export * from './user-exists.constraint';
export * from './unique-username.constraint';
import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { Class } from 'fashionkilla-interfaces';


export const userConstraints: Array<Class<ValidatorConstraintInterface>> = [
  UniqueEmailConstraint,
]