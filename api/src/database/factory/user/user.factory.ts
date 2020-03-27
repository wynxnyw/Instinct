import { getRepository } from 'typeorm';
import { UserEntity } from '../../entity/user';
import {
  defaultUserCredits,
  defaultUserLook,
  defaultUserPixels,
} from '../../../config';

export function userFactory(
  changes?: Partial<UserEntity>,
): Promise<UserEntity> {
  return getRepository(UserEntity).save({
    username: 'Test',
    email: 'test@testing.com',
    password: 'password',
    figure: defaultUserLook,
    credits: defaultUserCredits,
    pixels: defaultUserPixels,
    online: 0,
    ...changes,
  });
}
