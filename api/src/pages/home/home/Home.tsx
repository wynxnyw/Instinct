import React from 'react';
import { Row, Column, setURL, OpenBetaCard, UserLayout, BugTestingCard, InfoCard, ServerStatusCard } from 'components';

setURL('home', <Home />);

export function Home() {
  return (
    <UserLayout>
      <Row>
        <Column size={8}>
          <BugTestingCard />
          <InfoCard />
        </Column>
        <Column size={4}>
          <OpenBetaCard />
          <ServerStatusCard />
        </Column>
      </Row>
    </UserLayout>
  );
}
