import React from 'react';
import { Form, Icon, ModalButton } from 'components';

export function RegisterModal() {
  return (
    <ModalButton button="Register" header="Create an account">
      <Form className="login-form">
        <label className="username-input">
          <input type="text" name="username" className="rounded-input" placeholder="Username"/>
          <Icon type="user"/>
        </label>
        <label className="password-input">
          <input type="password" name="username" className="rounded-input" placeholder="Password"/>
          <Icon type="user"/>
        </label>
        <button type="submit" className="rounded-button blue plain">Log In</button>
      </Form>
    </ModalButton>
  )
}