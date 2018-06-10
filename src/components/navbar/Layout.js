import React from 'react';
import {NavLink} from 'react-router-dom';

const Layout = () => (
  <div style={{backgroundColor: '#eeeeee', height: '60px'}}>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        width: '80%',
        margin: '0px auto',
        paddingTop: '18px',
        fontSize: '18px',
        color: '#757575',
      }}
    >
      <div>
        <NavLink className="navLinks" to="/">
          Upload
        </NavLink>
      </div>
      <div>
        <NavLink className="navLinks" to="/resorts">
          Resorts
        </NavLink>
      </div>
      <div>
        <NavLink className="navLinks" to="/about">
          About
        </NavLink>
      </div>
    </div>
  </div>
);

export default Layout;
