import './NavBar.scss';
import { Icon } from 'components';
import React from 'react';
import { Link } from 'react-router-dom';
import { NavBarProps, NavBarLink } from './';

const defaultLinks: NavBarLink[] = [
  {
    text: 'Home',
    icon: 'home',
    path: 'home',
  },
  {
    text: 'Businesses and Jobs',
    icon: 'building',
    path: 'businesses',
  },
  {
    text: 'Life',
    icon: 'street-view',
    path: 'life',
  },
  {
    text: 'Shop',
    icon: 'shopping-cart',
    path: 'shop',
  },
];

export function NavBar({ links = defaultLinks }: NavBarProps) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark box-shadow">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="https://fabbo.io/34101043_1918243188228000_599624069276499968_n.png"
            width="30"
            height="30"
            alt=""
            className="rounded"
          />
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {links.map(link => (
              <li className="nav-item" key={link.path}>
                <Link className="nav-link" to={`/${link.path}`}>
                  <Icon className="mr-2" type={link.icon} />
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item">
              <span className="nav-link">
                <Icon className="mr-2" type="users" />9
              </span>
            </li>

            <li className="nav-item">
              <span className="nav-link">
                <Icon className="mr-2" type="alarm-clock" />
                8:08
              </span>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav">
          <button className="btn btn-success my-2 my-sm-0 play-button">
            <Icon className="mr-2" type="gamepad" />
            Play
          </button>
        </ul>
      </div>
    </nav>
  );
}
