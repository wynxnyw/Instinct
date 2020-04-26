import React, { useContext } from 'react';
import { AboutModalProps } from './';
import { ModalOverlay } from 'components';
import { HealthContext } from 'app/context';

export function AboutModal({ isOpen, onToggle }: AboutModalProps) {
  const healthContext = useContext(HealthContext);
  return (
    <>
      <ModalOverlay header="FASHIONKILLA" isOpen={isOpen} onToggle={onToggle}>
        <div className="text-dark">
          <p>High performance, scalable content management system developed with Typescript, React and Nest.</p>
          <h5>Version</h5>
          <p>{healthContext.systemVersion}</p>
          <h5>Built By</h5>
          <p>LeChris</p>
          <h5>Designed By</h5>
          <p>Raizer</p>
          <h5>With Help By</h5>
          <ul>
            <li>Layne <small>(Designed loading screen)</small></li>
          </ul>
        </div>
      </ModalOverlay>.
    </>
  );
}
