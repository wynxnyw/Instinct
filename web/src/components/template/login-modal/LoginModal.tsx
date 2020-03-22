import React from 'react';
import { Button, Form, Icon, ModalButton } from 'components';

export function LoginModal() {
  return (
    <>
      <div className="header-content">
        <div className="account-container">
          <div id="account-buttons" className="account-buttons">
            <Button>
              Login
            </Button>
          </div>
        </div>
      </div>
      <ModalButton button="Login" header="Login to your account">
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
    </>

  )
}
/*
    <ModalButton button="Login" header="Login to your account">
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
 */