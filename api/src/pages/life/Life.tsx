import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { ConfigContext, ConfigInterface } from 'app/context';
import { Card, Column, Row, setURL, UserLayout, Icon } from 'components';

setURL('life', <Life />);

export function Life() {
  const configContext: ConfigInterface = useContext(ConfigContext);
  return (
    <UserLayout>
      <Row>
        <Column size={6}>
          <Card bg="dark" color="white" header="Job Centre">
            <p className="card-text">Are you unemployed? Check out the list of available jobs by clicking below.</p>
            <p className="card-text">
              <Link className="btn btn-light" to="/business">
                <Icon type="briefcase" />
                View the list
              </Link>
            </p>
          </Card>
        </Column>
        <Column size={6}>
          <Card bg="primary" color="white" header="Properties">
            <p className="card-text">
              Are you looking for a new property? Check out what is on the market by clicking below.
            </p>
            <p className="card-text">
              <Link className="btn btn-light" to="properties">
                <Icon type="home" />
                View the list
              </Link>
            </p>
          </Card>
        </Column>
      </Row>
      <Row>
        <Column size={6}>
          <Card bg="info" color="white" header="Law and Order">
            <p className="card-text">
              Do you want more information about the laws of {configContext.siteName}? Check out the list below.
            </p>
            <p className="card-text">
              <Link className="btn btn-light" to="/life/law-and-order">
                <Icon type="balance-scale" />
                View
              </Link>
            </p>
          </Card>
        </Column>
        <Column size={6}>
          <Card bg="danger" color="white" header="Banking & Finance">
            <p className="card-text">
              Do you want more information about your finances? Check out your own personal dashboard below.
            </p>
            <p className="card-text">
              <Link className="btn btn-light" to="/life/banking-and-finance">
                <Icon type="chart-pie" />
                View
              </Link>
            </p>
          </Card>
        </Column>
      </Row>
    </UserLayout>
  );
}
