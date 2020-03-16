export interface ConfigInterface {
  siteName: string;
  setStore: (changes: Partial<ConfigInterface>) => void;
}
