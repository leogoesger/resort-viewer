import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import SummaryTable from './containers/EnhancedTable';
import Home from './components/Home';

const NavBar = () => (
  <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/resorts">Resort</NavLink>
    </li>
  </ul>
);

const App = () => (
  <div>
    <Router>
      <React.Fragment>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/resorts" component={SummaryTable} />
      </React.Fragment>
    </Router>
  </div>
);

export default App;
