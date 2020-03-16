import React from 'react';
import { JumbotronProps } from './';

export function Jumbotron({ children, title }: JumbotronProps) {
  return (
    <header className="page-header flex-container flex-vertical-center">
      <div className="page-header-content">
        <h1>{title}</h1>
        {children}
      </div>
    </header>
  );
}
