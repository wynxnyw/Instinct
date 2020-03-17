import { useContext } from 'react';
import { GuestGuardProps } from './';
import { redirect } from '../../utility/router';
import { SessionContext, SessionInterface } from 'app/context/session';

export function GuestGuard({ children }: GuestGuardProps) {
  const sessionContext: SessionInterface = useContext(SessionContext);

  console.log('Session Context: ', sessionContext);

  if (sessionContext.user !== undefined) {
    redirect('home');
  }

  return children;
}
