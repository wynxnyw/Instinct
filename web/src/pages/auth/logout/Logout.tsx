import { setURL } from 'components';
import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { SessionContext, SessionInterface } from 'app/context';

setURL('logout', <Logout />);

export function Logout() {
  const sessionContext = useContext<SessionInterface>(SessionContext);

  sessionContext.logout();

  return <Redirect to="/login" />;
}
