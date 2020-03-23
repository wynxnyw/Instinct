import React, { useContext } from 'react';
import { Card, Icon } from 'components';
import { ConfigContext, ConfigInterface } from 'app/context';

export function OpenBetaCard() {
  const configContext: ConfigInterface = useContext(ConfigContext);
  return (
    <Card header="Open Beta" icon="tools">
      <p className="card-text">
        {configContext.siteName} is currently in a open beta state. This means that the game is nearly complete to play
        but bugs may occur.
      </p>
      <p className="card-text">
        <a href="/beta" className="btn btn-warning">
          <Icon type="tools" />
          View more »
        </a>
      </p>
    </Card>
  );
}
