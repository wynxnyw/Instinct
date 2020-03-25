import { User } from 'fashionkilla-interfaces';

export interface UserSession {
  user?: User;
  startedAt?: Date;
}
