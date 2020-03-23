import React from 'react';
import { Card, Form, Input, Table } from 'components';

export function SearchForBusinessCard() {
  return (
    <Card header="Search For Business">
      <Form>
        <Input type="text" placeholder="Business Name" />
      </Form>
      <Table />
    </Card>
  );
}
