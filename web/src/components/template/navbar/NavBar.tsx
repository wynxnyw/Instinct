import React from 'react';
import './NavBar.scss';
import { NavBarChildLink, NavBarDropdown, NavBarLink, NavBarLabel, UserDropdown } from 'components';

export function NavBar() {
  return (
    <nav className="navigation-container">
      <ul className="navigation-menu flex-container">
        <NavBarLabel>Menu</NavBarLabel>
        <NavBarLink className="main-link-item" to="/" />
        <NavBarLink to="/home">Home</NavBarLink>
        <NavBarDropdown text="Community" to="/community/news">
          <NavBarChildLink to="/community/staff">Staff</NavBarChildLink>
          <NavBarChildLink to="/community/news">News</NavBarChildLink>
          <NavBarChildLink to="/community/photos">Photos</NavBarChildLink>
          <NavBarChildLink to="/community/jobs">Jobs</NavBarChildLink>
          <NavBarChildLink to="/community/marketplace">Marketplace</NavBarChildLink>
        </NavBarDropdown>
        <NavBarLink to="/community/games">High Scores</NavBarLink>
        <NavBarLink to="/groups">My Groups</NavBarLink>
        <NavBarLink to="/help">Help Tool</NavBarLink>
        <li className="navigation-item navigation-right-side-item has-items">
          <UserDropdown />
        </li>
      </ul>
    </nav>
  );
}
