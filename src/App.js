import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import 'assets/scss/style.scss';
import LandingPage from 'pages/LandingPage';
import Example from 'pages/Example';
import DetailsPage from 'pages/DetailsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/properties/:id" component={DetailsPage}></Route>
          <Route path="/example" component={Example}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
