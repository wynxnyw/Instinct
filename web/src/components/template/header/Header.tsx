import './Header.scss';
import React from 'react';

export function Header() {
  return (
    <header id="header" className="header-container pixelated is-small is-logged">
      <div className="header-content">
        <div className="logo">
          <a href="#">Rise</a>
        </div>
        <div className="account-container">
          <div id="account-buttons" className="account-buttons">
            <button id="register-popup-button" className="rounded-button white plain">
              Register
            </button>
            <span></span>
            <button id="login-popup-button" className="rounded-button white login-dialog-button">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
