import React from 'react';
import { ContainerProps } from './index';

export function Container({ children }: ContainerProps) {
  return <div className="container">{children}</div>;
}
