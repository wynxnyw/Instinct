import { GuestGuardProps } from './';
import React, { useContext } from 'react';
import { redirect } from '../../utility/router';
import { SessionContext, SessionInterface } from 'app/context/session';

export function GuestGuard({ children }: GuestGuardProps) {
  const sessionContext: SessionInterface = useContext(SessionContext);

  if (sessionContext.user !== undefined) {
    redirect('home');
  }

  return children;
}
