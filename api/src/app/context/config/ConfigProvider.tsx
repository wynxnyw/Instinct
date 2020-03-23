import React, { PureComponent } from 'react';
import { ConfigContext, ConfigProviderProps, ConfigInterface } from './';

export class ConfigProvider extends PureComponent<ConfigProviderProps> {
  setStore = (changes: Partial<ConfigInterface>): void => {
    return this.setState(changes);
  };

  state: ConfigInterface = {
    siteName: 'HabboRP',
    setStore: this.setStore,
  };

  render() {
    const { children } = this.props;
    return <ConfigContext.Provider value={this.state}>{children}</ConfigContext.Provider>;
  }
}
