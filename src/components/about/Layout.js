import React from 'react';
import AboutProject from './AboutProject';
import AboutMe from './AboutMe';
import Divider from '@material-ui/core/Divider';

const Layout = () => {
  return (
    <div style={{width: '80%', margin: '40px auto'}}>
      <AboutProject />
      <Divider style={{marginTop: '30px'}} />
      <AboutMe />
    </div>
  );
};

export default Layout;
