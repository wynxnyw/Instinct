import { UserLayoutProps } from './';
import React, { useContext } from 'react';
import { Header, NavBar, redirect } from 'components';
import { SessionContext, SessionInterface } from 'app/context';

export function UserLayout({ children, section = 'home', style }: UserLayoutProps) {
  const sessionContext: SessionInterface = useContext(SessionContext);

  if (sessionContext.user === undefined) {
    redirect('login');
  }

  return (
    <>
      <Header />
      <NavBar />
      <main>
        <section className="page-container" data-page={section} style={style}>
          {children}
        </section>
      </main>
    </>
  );
}
