import React from 'react';
import './ModalOverlay.scss';
import { ModalOverlayProps } from './';
import { Modal, ModalBody } from 'reactstrap';

export function ModalOverlay({ children, header }: ModalOverlayProps) {
  return (
    <Modal className="login-popup" isOpen={true}>
      <h3 className="aside-title">{header}</h3>
      {children}
    </Modal>
  );
}
