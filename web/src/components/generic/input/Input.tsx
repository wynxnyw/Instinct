import './Input.scss';
import React from 'react';
import { InputProps } from './';

export function Input(props: InputProps) {
  return <input className="form-control" {...props} />;
}
