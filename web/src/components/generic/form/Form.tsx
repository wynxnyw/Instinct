import React from 'react';
import { FormProps } from './';

export function Form({ children, onSubmit }: FormProps) {
  return (
    <form className="form-control" onSubmit={onSubmit}>
      {children}
    </form>
  );
}
