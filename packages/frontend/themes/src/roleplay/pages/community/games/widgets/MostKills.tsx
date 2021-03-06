import React from 'react';
import {Avatar, Card, Icon} from '@instinct-prj/frontend';
import {exampleUser} from '@instinct-prj/interface';

export function MostKillsCard() {
  function getHeader() {
    return (
      <div className="row">
        <div className="col-6">
          <Icon type="skull" />
        </div>
        <div className="col-6 text-right">Kills</div>
      </div>
    );
  }

  return (
    <Card header={getHeader()}>
      <div className="top-user-container">
        <div className="row">
          <div className="col-4">
            <Avatar look={exampleUser.figure} headOnly />
          </div>
          <div className="col-8 text-right">
            <h3>Chris</h3>
            <h5 style={{marginTop: -10}}>
              <b>6</b> kills
            </h5>
          </div>
        </div>
      </div>
      <div className="top-user-container">
        <div className="row">
          <div className="col-4">
            <Avatar look={exampleUser.figure} headOnly />
          </div>
          <div className="col-8 text-right">
            <h3>Louis</h3>
            <h5 style={{marginTop: -10}}>
              <b>2</b> kills
            </h5>
          </div>
        </div>
      </div>
    </Card>
  );
}
