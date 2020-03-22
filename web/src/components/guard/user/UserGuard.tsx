import { useContext } from 'react';
import { UserGuardProps } from './';
import { redirect } from '../../utility/router';
import { SessionContext, SessionInterface } from 'app/context/session';

export function UserGuard({ children }: UserGuardProps) {
  const sessionContext: SessionInterface = useContext(SessionContext);

  if (sessionContext.user === undefined) {
    redirect('login');
  }

  return children;
}
