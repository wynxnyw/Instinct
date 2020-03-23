import React from 'react';
import { ColumnProps } from './index';

export function Column({ children, size }: ColumnProps) {
  return <div className={`col col-md-${size}`}>{children}</div>;
}
