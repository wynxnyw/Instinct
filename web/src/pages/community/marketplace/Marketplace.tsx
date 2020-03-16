import React from 'react';
import { Card, Container, Column, Jumbotron, Row, UserLayout, setURL } from 'components';

setURL('community/marketplace', <Marketplace />);

export function Marketplace() {
  return (
    <UserLayout section="shop">
      <Jumbotron title="VIP Membership">
        <p>Upgrade your account to unlock new outfits, extra commands and stylish account add-ons!</p>
      </Jumbotron>
      <Container>
        <Row>
          <Column side="left">
            <Card header="VIP Membership">
              <p>Coming soon.</p>
            </Card>
          </Column>
        </Row>
      </Container>
    </UserLayout>
  );
}
