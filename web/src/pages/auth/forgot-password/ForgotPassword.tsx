import React from 'react';
import { GuestLayout, setURL } from 'components';

setURL('forgot-password', <ForgotPassword />);

export function ForgotPassword() {
  return (
    <GuestLayout>
      <p>Forgot Password?</p>
    </GuestLayout>
  );
}
