import React from 'react';
import { setURL } from 'components';

setURL('500', <ServerError />);

export function ServerError() {
  return <p>Server Error</p>;
}
