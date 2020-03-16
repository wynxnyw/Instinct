export interface HealthInterface {
  uptime: number; // in milliseconds
  onlineUsers: number;
  setStore: (changes: Partial<HealthInterface>) => void;
}
