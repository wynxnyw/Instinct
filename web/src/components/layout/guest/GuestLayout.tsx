import React from 'react';
import './GuestLayout.scss';
import { GuestLayoutProps } from './';
import { GuestGuard, Header, LoginModal, NavBar } from 'components';
import { AboutModal } from '../../template/about-modal';

export function GuestLayout({ children, section = 'home', style }: GuestLayoutProps) {

  return (
    <GuestGuard>
      <Header>
        <AboutModal/>
      </Header>
      <NavBar />
      <main>
        <section className="page-container" data-page={section} style={style}>
          { children }
        </section>
      </main>
    </GuestGuard>
  );
}
