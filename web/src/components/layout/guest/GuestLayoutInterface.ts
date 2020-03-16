import { Children } from 'components';

export interface GuestLayoutProps {
  children: Children;
  onLogin?: () => void;
  onRegister?: () => void;
  onSubmit?: () => void;
}
