import React from 'react';
import { ModalButton } from 'components';

export function AboutModal() {
  return (
    <>
      <ModalButton button="About" header="FASHIONKILLA">
        <div className="text-dark">
          <p>High performance, scalable content management system developed with Typescript, React and Nest.</p>
          <h5>Version</h5>
          <p>0.1 Demo</p>
          <h5>Built By</h5>
          <p>LeChris</p>
          <h5>Designed By</h5>
          <p>Raizer</p>
        </div>
      </ModalButton>
    </>
  );
}
