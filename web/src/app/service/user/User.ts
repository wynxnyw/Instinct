import { UserInterface } from './';
import { User } from 'fashionkilla-interfaces';
import { backendAPI } from '../../BackendAPI';

export class UserSession implements UserInterface {

  create(username: string, password: string, email: string): Promise<User> {
    return backendAPI.post('users', { username, password, email });
  }

  getByID(userID: number): Promise<User> {
    return backendAPI.get(`users/${userID}`);
  }

}

export const userSession: UserInterface = new UserSession();