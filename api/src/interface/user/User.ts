export interface User {
  id: number;
  username: string;
  credits: number;
  pixels: number;
  online: boolean;
}

export const exampleUser: User = {
  id: 1,
  username: 'Test',
  credits: 1,
  pixels: 1,
  online: false,
};
