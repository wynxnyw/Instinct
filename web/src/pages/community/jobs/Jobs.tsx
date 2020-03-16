import React from 'react';
import { Card, Container, Column, Jumbotron, Row, UserLayout, setURL } from 'components';

setURL('community/jobs', <Jobs />);

export function Jobs() {
  return (
    <UserLayout section="jobs">
      <Jumbotron title="Job Offers">
        <p>Listed below are the available jobs for which we are actively seeking volunteers for.</p>
      </Jumbotron>
      <Container>
        <Row>
          <Column side="left">
            <Card header="Available Positions">
              <p>There are currently no available positions.</p>
            </Card>
          </Column>
        </Row>
      </Container>
    </UserLayout>
  );
}
