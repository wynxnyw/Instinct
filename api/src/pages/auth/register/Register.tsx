import React from 'react';
import { GuestLayout, setURL, redirect, Input, Label, Row, Typography } from 'components';

setURL('register', <Register />);

export function Register() {
  function onLogin(): void {
    redirect('login');
  }

  function onRegister(): void {}

  return (
    <GuestLayout onLogin={onLogin} onRegister={onRegister} onSubmit={onRegister}>
      <Row>
        <Typography type="h6">Create A New Account</Typography>
      </Row>
      <Row>
        <Label>Email address</Label>
        <Input type="email" placeholder="Email address" />
      </Row>
      <Row>
        <Label>Password</Label>
        <Input type="password" placeholder="Password" />
      </Row>
      <Row>
        <Label>Password Again</Label>
        <Input type="password" placeholder="Password Again" />
      </Row>
    </GuestLayout>
  );
}
