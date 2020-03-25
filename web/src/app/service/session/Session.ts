import { SessionInterface } from './';
import { localStorageService } from 'app/service';
import { exampleUser, User } from 'fashionkilla-interfaces';

class SessionService implements SessionInterface {
  readonly localStorageKey = 'session';

  async init(): Promise<User | undefined> {
    try {
      const authToken: string = localStorageService.get(this.localStorageKey);
      return await this.attemptBearerToken(authToken);
    } catch {
      return undefined;
    }
  }

  async attemptCredentials(username: string, password: string): Promise<string> {
    if (username !== exampleUser.username || password !== 'password') {
      throw new Error('Invalid credentials');
    }

    return '123';
  }

  async attemptBearerToken(authToken: string): Promise<User> {
    if (authToken !== '123') {
      throw new Error('Invalid token');
    }

    localStorageService.set(this.localStorageKey, '123');
    return exampleUser;
  }

  logout(): void {
    localStorageService.delete(this.localStorageKey);
  }
}

export const sessionService: SessionInterface = new SessionService();
