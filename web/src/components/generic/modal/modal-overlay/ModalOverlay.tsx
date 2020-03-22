import React from 'react';
import './ModalOverlay.scss';
import { Modal } from 'reactstrap';
import { ModalOverlayProps } from './';

export function ModalOverlay({ children, header }: ModalOverlayProps) {
  return (
    <Modal className="login-popup" isOpen={true}>
      <h3 className="aside-title">{header}</h3>
      {children}
    </Modal>
  );
}
