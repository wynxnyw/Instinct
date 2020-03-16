import React from 'react';
import { ArticleList, UserLayout, setURL } from 'components';

setURL('home', <Home />);

export function Home() {
  return (
    <UserLayout>
      <ArticleList />
    </UserLayout>
  );
}
