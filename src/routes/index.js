import React from 'react';
import { Switch } from 'react-router-dom';

// CUSTOM IMPORTS
import Route from './Route';
// PUBLIC URLS
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';

export default function Routes() {
  return (
    <Switch>
      {/* PUBLIC ROUTES */}
      <Route path="/" exact component={Home} />
      <Route path="/register" exact component={SignUp} />

      <Route path="/" component={() => <h1>404! PAGE NOT FOUND</h1>} />
    </Switch>
  );
}
