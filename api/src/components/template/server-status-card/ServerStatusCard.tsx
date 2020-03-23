import React from 'react';
import { Card } from 'components';

export function ServerStatusCard() {
  return (
    <Card header="Server Status" icon="server">
      <ul>
        <li>Version: v14.0.0.30417</li>
        <li>Build Date: 3/7/2020</li>
        <li>Checked in: 08/03/20 03:17:00</li>
      </ul>
    </Card>
  );
}
