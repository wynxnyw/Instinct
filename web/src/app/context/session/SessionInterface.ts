import { UserSession } from 'app/interface';
import { User } from 'fashionkilla-interfaces';

export interface SessionInterface extends UserSession {
  setStore: (changes: Partial<SessionInterface>) => void;
  login(username: string, password: string): Promise<User>;
  logout(): void;
  forceStart(user: User): void;
}
