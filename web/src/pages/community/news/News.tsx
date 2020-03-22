import React from 'react';
import { ArticleList, setURL, UserLayout } from 'components';

setURL('community/news', <News />);

export function News() {
  return (
    <UserLayout>
      <ArticleList />
    </UserLayout>
  );
}
