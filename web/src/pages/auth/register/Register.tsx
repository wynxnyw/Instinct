import React from 'react';
import { GuestLayout, setURL, redirect } from 'components';

setURL('register', <Register />);

export function Register() {
  function onLogin(): void {
    redirect('login');
  }

  function onRegister(): void {}

  return (
    <GuestLayout onLogin={onLogin} onRegister={onRegister} onSubmit={onRegister}>
      <p>Register</p>
    </GuestLayout>
  );
}
