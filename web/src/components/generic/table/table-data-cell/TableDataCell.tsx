import React from 'react';
import { TableDataCellProps } from './';

export function TableDataCell({ children }: TableDataCellProps) {
  return <td>{children}</td>;
}
