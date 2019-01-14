import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" exact activeClassName="is-active">
      Home
    </NavLink>
    <NavLink to="/create" exact activeClassName="is-active">
      Create expense
    </NavLink>
    <NavLink to="/help" exact activeClassName="is-active">
      Help page
    </NavLink>
  </header>
);

export default Header;
