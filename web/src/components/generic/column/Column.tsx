import React from 'react';
import { ColumnProps } from './index';

export function Column({ children, side }: ColumnProps) {
  return <div className={`${side}-side`}>{children}</div>;
}
