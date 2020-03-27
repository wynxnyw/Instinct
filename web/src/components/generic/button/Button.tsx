import React from 'react';
import { ButtonProps } from './index';

export function Button({ color = 'light', className, children, onClick, style }: ButtonProps) {
  return (
    <button className={`btn btn-${color} ${className} `} onClick={onClick} style={style}>
      {children}
    </button>
  );
}
