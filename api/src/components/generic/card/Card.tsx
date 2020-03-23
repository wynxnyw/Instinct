import React from 'react';
import { Icon } from 'components';
import { CardProps } from './index';

export function Card(props: CardProps) {
  const { bg, color, className, children, header, icon } = props;
  return (
    <div className={`card ${bg && `bg-${bg} ${className && className}`} ${color && `text-${color}`} ${className}`}>
      <div className="card-body">
        <h5 className="card-title">
          {icon && <Icon type={icon} />}
          {header}
        </h5>
        <div className="card-text">{children}</div>
      </div>
    </div>
  );
}
