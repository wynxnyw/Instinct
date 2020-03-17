import { UserLayoutProps } from './';
import React, { useContext } from 'react';
import { SessionContext, SessionInterface } from 'app/context';
import { Header, NavBar, redirect, UserGuard } from 'components';

export function UserLayout({ children, section = 'home', style }: UserLayoutProps) {
  const sessionContext: SessionInterface = useContext(SessionContext);

  if (sessionContext.user === undefined) {
    redirect('login');
  }

  return (
    <UserGuard>
      <Header />
      <NavBar />
      <main>
        <section className="page-container" data-page={section} style={style}>
          {children}
        </section>
      </main>
    </UserGuard>
  );
}
