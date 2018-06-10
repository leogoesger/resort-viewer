import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {MuiThemeProvider} from '@material-ui/core/styles';

import Theme from './styles/Theme';
import Navbar from './containers/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Summary from './containers/Summary';
import AttributeMap from './containers/AttributeMap';
import About from './containers/About';
import Resort from './containers/Resort';

const App = () => (
  <MuiThemeProvider theme={Theme}>
    <Navbar />
    <Footer />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/resorts" component={Summary} />
      <Route exact path="/attributeMap" component={AttributeMap} />
      <Route exact path="/about" component={About} />
      <Route exact path="/resort" component={Resort} />
    </Switch>
  </MuiThemeProvider>
);
export default App;
