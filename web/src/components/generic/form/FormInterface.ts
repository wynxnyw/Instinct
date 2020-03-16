import { Children } from 'components';

export interface FormProps {
  children: Children;
  onSubmit?: () => void;
}
