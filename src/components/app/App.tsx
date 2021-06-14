import React from 'react';
import './App.scss';
import './_colors.scss'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { IndexPage } from './index-page/IndexPage';

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/"><IndexPage /></Route>
          </Switch>
      </Router>
  );
}

export default App;
