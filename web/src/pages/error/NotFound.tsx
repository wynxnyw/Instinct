import React from 'react';
import { Card, Container, Column, set404, UserLayout } from 'components';

set404(<NotFound />);

export function NotFound() {
  return (
    <UserLayout>
      <Container>
        <Column side="left">
          <Card header="Page Not Found">
            <img style={{ float: 'right' }} src="/img/error.gif" />
          </Card>
        </Column>
      </Container>
    </UserLayout>
  );
}
