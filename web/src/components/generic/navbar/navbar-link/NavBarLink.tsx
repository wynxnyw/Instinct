import React from 'react';
import { NavBarLinkProps } from './index';
import { Link } from 'react-router-dom';

export function NavBarLink({ children, className = '', to }: NavBarLinkProps) {
  return (
    <li className={`navigation-item ${className}`}>
      <Link to={to}>{children}</Link>
    </li>
  );
}
