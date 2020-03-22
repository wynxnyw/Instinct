import React from 'react';
import { FormProps } from './';

export function Form({ children, className, onSubmit }: FormProps) {
  return (
    <form className={ className || 'form-control' } onSubmit={onSubmit}>
      {children}
    </form>
  );
}
