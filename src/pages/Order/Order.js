import { Component} from 'react';

import { Route, Switch } from 'dva/router';

import OrderDetail from "./OrderDetail/OrderDetail";

export default class Order extends Component {

  render() {
    return (
      <Switch>
        <Route path="/order/detail" component={OrderDetail}/>
      </Switch>
    );
  }
}


