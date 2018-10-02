import React from 'react';

import { Route, Switch } from 'dva/router';

import Button from "./Button/Button";

import Modals from "./Modals/Modals";

import Loadings from "./Loadings/Loadings";

import Notifications from "./Notifications/Notifications";

import Mesages from "./Messages/Messages";

import Tabs from "./Tabs/Tabs";

class UI extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path='/ui/buttons' component={Button}/>
          <Route path='/ui/modals' component={Modals}/>
          <Route path='/ui/loadings' component={Loadings}/>
          <Route path='/ui/notifications' component={Notifications}/>
          <Route path='/ui/messages' component={Mesages}/>
          <Route path='/ui/tabs' component={Tabs}/>
        </Switch>
      </div>
    );
  }
}

export default  UI ;
