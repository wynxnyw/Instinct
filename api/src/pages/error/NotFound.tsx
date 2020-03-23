import React from 'react';
import { set404 } from 'components';

set404(<NotFound />);

export function NotFound() {
  return <p>Not Found</p>;
}
