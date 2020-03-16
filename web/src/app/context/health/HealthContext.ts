import { createContext } from 'react';
import { HealthInterface } from './HealthInterface';

export const HealthContext = createContext<HealthInterface>({
  uptime: 0,
  onlineUsers: 0,
  setStore: () => {},
});
