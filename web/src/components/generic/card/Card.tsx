import React from 'react';
import { Icon } from 'components';
import { CardProps } from './index';

export function Card(props: CardProps) {
  const { bg, color, className = '', children, header, icon } = props;
  return (
    <article className={`default-section ${className}`}>
      {
        header && (
          <div className="aside-title">
            {icon && <Icon type={icon} />}
            <h3>{header}</h3>
          </div>
        )
      }
      <div className="aside-content">{children}</div>
    </article>
  );
}
