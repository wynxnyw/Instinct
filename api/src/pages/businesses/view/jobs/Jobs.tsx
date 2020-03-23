import React from 'react';
import { setURL, UserLayout } from 'components';

setURL('businesses/:id/jobs', <Jobs />);

export function Jobs() {
  return (
    <UserLayout>
      <p>Business Jobs</p>
    </UserLayout>
  );
}
