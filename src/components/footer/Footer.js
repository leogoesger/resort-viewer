import React from 'react';

const Footer = () => (
  <div
    style={{
      position: 'fixed',
      bottom: '0px',
      height: '40px',
      width: '100%',
      textAlign: 'right',
    }}
  >
    <div style={{paddingTop: '10px', paddingRight: '20px'}}>
      <a
        style={{textDecoration: 'none'}}
        href="https://github.com/leogoesger"
        target="_blank"
        rel="noopener noreferrer"
      >
        @leogoesger
      </a>
    </div>
  </div>
);

export default Footer;
