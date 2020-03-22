import React from 'react';
import { ModalOverlayProps } from './';

export function ModalOverlay({ children, header }: ModalOverlayProps) {
  return (
    <div id="login-dialog" className="login-popup zoom-anim-dialog animated fadeIn">
      <h3 className="aside-title">{header}</h3>
      {children}
    </div>
  );
}
