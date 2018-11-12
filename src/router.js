import React from 'react';

import { Router, Route, Switch } from 'dva/router';

import Login from "./pages/Login/Login";

import Admin from "./Admin";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" render={( props )=>(
          <Admin/>
        )} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
