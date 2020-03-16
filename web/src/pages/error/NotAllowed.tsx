import React from 'react';
import { setURL } from 'components';

setURL('503', <NotAllowed />);

export function NotAllowed() {
  return <p>Not Allowed</p>;
}
