import React from 'react';
import { MyProfile } from './my-profile';
import { UserLayout, setURL, Container, Column, RecentNews, PopularGroups, UserOfTheWeek, PopularRooms } from 'components';

setURL('home', <Home />);

export function Home() {
  return (
    <UserLayout>
      <Container>
        <Column side="left">
          <MyProfile />
          <PopularRooms />
        </Column>
        <Column side="right">
          <RecentNews />
          <PopularGroups />
          <UserOfTheWeek />
        </Column>
      </Container>
    </UserLayout>
  );
}
