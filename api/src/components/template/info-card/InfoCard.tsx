import React, { useContext } from 'react';
import { Card, Icon } from 'components';
import { ConfigContext, ConfigInterface } from 'app/context';

export function InfoCard() {
  const configContext: ConfigInterface = useContext(ConfigContext);
  return (
    <Card header="Info" icon="info">
      <h6 className="card-subtitle mb-2 text-muted">Learn more about {configContext.siteName}!</h6>
      <ul className="list-unstyled text-left">
        <li className="media">
          <Icon type="door-open mr-3" />
          <div className="media-body">
            <h5 className="mt-0 mb-1">Introduction</h5>
            Welcome to {configContext.siteName}, an interactive roleplaying environment where characters work and live
            in the bustling Broadwater City and quieter town of Oakdale. {configContext.siteName} follows a realistic
            governance structure and strives for the most realism possible.
          </div>
        </li>

        <li className="media my-4">
          <Icon type="briefcase mr-3" />
          <div className="media-body">
            <h5 className="mt-0 mb-1">Working and jobs</h5>
            Money doesn't grow on trees! As a citizen of {configContext.siteName} you have the chance to get a job and
            earn some money. To view available jobs, visit the 'Jobs' section of the website. Working is divided into
            shifts of 10 minutes (1 hour in-game time). Every 10 minutes you will receive your payslip. There are
            certain restrictions on working on weekends.
          </div>
        </li>

        <li className="media my-4">
          <Icon type="siren-on mr-3" />
          <div className="media-body">
            <h5 className="mt-0 mb-1">Crime and gangs</h5>
            An inevitable feature of any environment is crime! Not to fear though, the Central Police Service of{' '}
            {configContext.siteName} (known as Central Police) works hard to protect all citizens. The Central Police is
            headed by a civilian Commissioner who is elected by you. Fancy a life of crime? Form a gang and take over
            roads and stamp your territory!
          </div>
        </li>

        <li className="media my-4">
          <Icon type="box-ballot mr-3" />
          <div className="media-body">
            <h5 className="mt-0 mb-1">Democracy and life</h5>
            {configContext.siteName} is a functional democracy. Citizens are governed in two levels. The highest level
            is the Central Government which is headed by the President. The Central Government passes laws and
            regulations, collects federal taxes and maintains federal departments and agencies such as the Police and
            Health Services. The second level is local government. The Broadwater District Council oversees all
            municipal services and collects taxes and provides services. It is elected every 4 weeks.
          </div>
        </li>
      </ul>
    </Card>
  );
}
