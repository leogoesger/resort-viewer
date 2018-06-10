import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Navbar from './containers/Navbar';
import Home from './components/home/Home';
import Summary from './containers/Summary';
import AttributeMap from './containers/AttributeMap';

const App = () => (
  <React.Fragment>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/summary" component={Summary} />
      <Route exact path="/attributeMap" component={AttributeMap} />
    </Switch>
  </React.Fragment>
);

export default App;
