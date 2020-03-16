import { User, UserSession } from 'app/interface';

export interface SessionInterface extends UserSession {
  setStore: (changes: Partial<SessionInterface>) => void;
  login(username: string, password: string): Promise<User>;
  logout(): void;
}
