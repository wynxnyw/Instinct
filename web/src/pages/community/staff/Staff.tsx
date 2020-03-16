import React, { useContext } from 'react';
import { ConfigContext, ConfigInterface } from 'app/context';
import { Card, Container, Column, UserLayout, setURL, Jumbotron, Row } from 'components';

setURL('community/staff', <Staff />);

export function Staff() {
  const configContext: ConfigInterface = useContext(ConfigContext);
  return (
    <UserLayout section="community_team">
      <Jumbotron title="Staff Team">
        <p>
          These volunteer players represent the official team and are responsible for maintaining order and security
          inside the hotel.
        </p>
      </Jumbotron>
      <Container>
        <Row>
          <Column side="left">
            <Card header="Administration">
              <p>
                Administrators manage and maintain {configContext.siteName}, identifying system requirements, and
                monitoring the community performance.
              </p>
            </Card>
            <Card header="Moderation">
              <p>
                Moderators are Staff members of {configContext.siteName} who are responsible for ensuring the safety of
                the users in the community and responding to Calls for Help.
              </p>
            </Card>
          </Column>
        </Row>
      </Container>
    </UserLayout>
  );
}
