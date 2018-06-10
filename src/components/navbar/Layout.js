import React from 'react';
import {NavLink} from 'react-router-dom';

const Layout = () => (
  <div style={{display: 'flex', justifyContent: 'space-around'}}>
    <div>
      <NavLink className="navLinks" to="/">
        Home
      </NavLink>
    </div>
    <div>
      <NavLink className="navLinks" to="/summary">
        Resorts
      </NavLink>
    </div>
  </div>
);

export default Layout;
