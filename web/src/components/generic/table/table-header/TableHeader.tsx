import React from 'react';
import { TableHeaderProps } from './';

export function TableHeader({ children }: TableHeaderProps) {
  return (
    <th scope="col" style={{ borderTop: 0 }}>
      {children}
    </th>
  );
}
