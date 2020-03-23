import React from 'react';
import { Button, Card, Icon } from 'components';

export function MyJobCard() {
  return (
    <Card header="My Job" icon="star">
      <p className="card-text">
        Unemployed
        <br />
        Unemployed
        <br />
        £0
      </p>
      <hr />
      <p className="card-text">
        <Button color="dark">
          <Icon type="eye" />
          View
        </Button>
      </p>
    </Card>
  );
}
