import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Summary from './containers/Summary';
import Home from './components/home/Home';
import Navbar from './containers/Navbar';

const App = () => (
  <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/summary" component={Summary} />
    </React.Fragment>
  </Router>
);

export default App;
