import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from './pages/welcome';

const App = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Welcome />
      </Route>
    </Switch>
  </Router>
);

export default App;
