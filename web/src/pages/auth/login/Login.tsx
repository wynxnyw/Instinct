import React from 'react';
import { GuestLayout, setURL, redirect, Modal } from 'components';

setURL('login', <Login />);

export function Login() {
  function onLogin(): void {
    console.log('do submit');
  }

  function onRegister(): void {
    redirect('register');
  }

  return (
    <GuestLayout onRegister={onRegister} onSubmit={onLogin} onLogin={onLogin}>
      <Modal />
    </GuestLayout>
  );
}
