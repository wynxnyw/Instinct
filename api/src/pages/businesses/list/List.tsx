import React from 'react';
import {
  Column,
  JobCentreCard,
  setURL,
  Row,
  UserLayout,
  MyJobCard,
  AboutBusinessCard,
  OpenBetaCard,
  SearchForBusinessCard,
  CreateABusinessCard,
} from 'components';

setURL('businesses', <List />);

export function List() {
  return (
    <UserLayout>
      <Row>
        <Column size={8}>
          <JobCentreCard />
          <SearchForBusinessCard />
          <CreateABusinessCard />
        </Column>
        <Column size={4}>
          <MyJobCard />
          <AboutBusinessCard />
          <OpenBetaCard />
        </Column>
      </Row>
    </UserLayout>
  );
}
