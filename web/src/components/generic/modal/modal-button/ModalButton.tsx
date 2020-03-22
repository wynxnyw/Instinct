import React, { useState } from 'react';
import { Button, ModalOverlay } from 'components';
import { ModalButtonProps, ModalButtonState, defaultModalButtonState } from './';

export function ModalButton({ button, children, header }: ModalButtonProps) {
  const [state, setState] = useState<ModalButtonState>(defaultModalButtonState);

  function onToggle(): void {
    setState({
      showModal: !state.showModal,
    });
  }

  return (
    <>
      <Button className="rounded-button white plain" onClick={onToggle}>
        {button}
      </Button>
      <ModalOverlay header={header} isOpen={state.showModal} onToggle={onToggle}>
        {children}
      </ModalOverlay>
    </>
  );
}
