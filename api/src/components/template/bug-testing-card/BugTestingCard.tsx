import React from 'react';
import { Card, Icon } from 'components';

export function BugTestingCard() {
  return (
    <Card className="bug-testing-card" color="white" header="Welcome to Open Beta!">
      <p className="card-text">
        We have now completed our alpha testing and are ready to move into Open Beta! Please let us know if any bugs
        occur though!
      </p>
      <p className="card-text">
        <a href="/beta" className="btn btn-light">
          <Icon type="tools" />
          Report a bug or suggest a feature »
        </a>
      </p>
    </Card>
  );
}
