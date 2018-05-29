import React from 'react';
import {NavLink} from 'react-router-dom';

const Layout = () => (
  <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/summary">Summary</NavLink>
    </li>
  </ul>
);

export default Layout;
