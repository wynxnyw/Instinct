import React, { PureComponent } from 'react';
import { HealthContext, HealthInterface, HealthProviderProps } from './index';

export class HealthProvider extends PureComponent<HealthProviderProps> {
  setStore = (changes: Partial<HealthInterface>): void => {
    return this.setState(changes);
  };

  state: HealthInterface = {
    uptime: 0,
    onlineUsers: 0,
    setStore: this.setStore,
  };

  render() {
    const { children } = this.props;
    return <HealthContext.Provider value={this.state}>{children}</HealthContext.Provider>;
  }
}
