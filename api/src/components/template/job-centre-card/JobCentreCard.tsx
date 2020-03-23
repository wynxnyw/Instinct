import React from 'react';
import { Card, Table } from 'components';

export function JobCentreCard() {
  return (
    <Card header="Job Centre" icon="suitcase">
      <p>Below is all the jobs which are available.</p>
      <Table />
    </Card>
  );
}
