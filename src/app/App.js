import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import './App.less';
import { Home } from './home';
import { Calculator } from '../calculator';
import Navbar from './shared/Navbar';

const App = () => {
  return (
    <div id="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/calculator" component={Calculator} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
