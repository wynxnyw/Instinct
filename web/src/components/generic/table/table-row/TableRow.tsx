import React from 'react';
import { TableRowProps } from './';

export function TableRow({ children }: TableRowProps) {
  return <tr>{children}</tr>;
}
