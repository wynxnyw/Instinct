import React from 'react';
import { ArticleList, GuestLayout, setURL } from 'components';

setURL('login', <Login />);

export function Login() {
  return (
    <GuestLayout>
      <ArticleList/>
    </GuestLayout>
  );
}
