import { User } from './';

export interface UserSession {
  user?: User;
  startedAt?: Date;
}
