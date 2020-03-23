import './Header.scss';
import { Icon } from 'components';
import React, { useContext } from 'react';
import { SessionContext, SessionInterface } from 'app/context';

export function Header() {
  const sessionContext: SessionInterface = useContext(SessionContext);
  return (
    <div className="jumbotron jumbotron-fluid header">
      <div className="container">
        <div className="overlay" />
        <h1 className="display-4">{sessionContext.user?.username}</h1>
        <p>
          <span>
            <Icon type="money-bill" />
            {sessionContext.user?.purseBalance}
          </span>
          <span className="ml-2">
            <Icon type="piggy-bank" />
            {sessionContext.user?.bankBalance}
          </span>
        </p>
      </div>
    </div>
  );
}
