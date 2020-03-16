import { createContext } from 'react';
import { ConfigInterface } from './ConfigInterface';

export const ConfigContext = createContext<ConfigInterface>({
  siteName: 'HabboRP',
  setStore: () => {},
});
