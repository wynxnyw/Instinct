import { SessionInterface } from './';
import { localStorageService } from 'app/service';
import { exampleBearerToken, exampleUser, User } from 'app/interface';

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

    return exampleBearerToken;
  }

  async attemptBearerToken(authToken: string): Promise<User> {
    if (authToken !== exampleBearerToken) {
      throw new Error('Invalid token');
    }

    localStorageService.set(this.localStorageKey, exampleBearerToken);
    return exampleUser;
  }

  logout(): void {
    localStorageService.delete(this.localStorageKey);
  }
}

export const sessionService: SessionInterface = new SessionService();
