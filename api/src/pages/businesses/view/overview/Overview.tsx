import React from 'react';
import { setURL, UserLayout } from 'components';

setURL('businesses/:id', <Overview />);

export function Overview() {
  return (
    <UserLayout>
      <p>Business Overview</p>
    </UserLayout>
  );
}
