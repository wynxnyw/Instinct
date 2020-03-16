import React from 'react';
import { TableHeadProps } from './';

export function TableHead({ children }: TableHeadProps) {
  return <thead>{children}</thead>;
}
