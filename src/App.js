import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {MuiThemeProvider} from '@material-ui/core/styles';

import Navbar from './containers/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Summary from './containers/Summary';
import AttributeMap from './containers/AttributeMap';
import Theme from './styles/Theme';

const App = ({publicUrl}) => {
  return (
    <MuiThemeProvider theme={Theme}>
      <Navbar />
      <Footer />
      <Switch>
        <Route exact path={publicUrl + '/'} component={Home} />
        <Route exact path={publicUrl + '/resorts'} component={Summary} />
        <Route
          exact
          path={publicUrl + '/attributeMap'}
          component={AttributeMap}
        />
      </Switch>
    </MuiThemeProvider>
  );
};

export default App;
