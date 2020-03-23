import { UserLayoutProps } from './';
import React, { useContext } from 'react';
import { SessionContext, SessionInterface } from 'app/context';
import { Container, Header, NavBar, redirect } from 'components';

export function UserLayout({ children }: UserLayoutProps) {
  const sessionContext: SessionInterface = useContext(SessionContext);

  if (sessionContext.user === undefined) {
    redirect('login');
  }

  return (
    <>
      <Header />
      <NavBar />
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
}
