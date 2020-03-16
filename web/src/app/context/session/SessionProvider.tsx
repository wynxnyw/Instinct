import { exampleUser, User } from 'app/interface';
import React, { PureComponent } from 'react';
import { sessionService } from 'app/service';
import { SessionContext, SessionInterface, SessionProviderProps } from './';

export class SessionContextProvider extends PureComponent<SessionProviderProps> {
  setStore = (changes: Partial<SessionInterface>): void => {
    return this.setState(changes);
  };

  componentDidMount() {
    this.init();
  }

  async init(): Promise<void> {
    const user: User | undefined = await sessionService.init();

    if (user) {
      this.initSession(user);
    }
  }

  async login(username: string, password: string): Promise<User> {
    const authToken: string = await sessionService.attemptCredentials(username, password);
    const user: User = await sessionService.attemptBearerToken(authToken);
    this.initSession(user);
    return user;
  }

  logout(): void {
    sessionService.logout();
    this.setState({
      user: undefined,
      startedAt: undefined,
    });
  }

  initSession(user: User): void {
    this.setState({
      user,
      startedAt: new Date(),
    });
  }

  state: SessionInterface = {
    startedAt: undefined,
    user: exampleUser,
    setStore: this.setStore,
    login: this.login,
    logout: this.logout,
  };

  render() {
    const { children } = this.props;
    return <SessionContext.Provider value={this.state}>{children}</SessionContext.Provider>;
  }
}
