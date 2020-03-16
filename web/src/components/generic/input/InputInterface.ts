export type InputType = 'password' | 'text' | 'number' | 'email';

export interface InputProps {
  type: InputType;
  placeholder?: string;
}
