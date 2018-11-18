import React from 'react';

import { Layout } from 'antd';

import { Route, Switch, Redirect } from 'dva/router';


// import Breadcrumbs from "../Breadcrumb/Breadcrumbs";

import Home from "pages/Home/Home";

import Ui from "pages/Ui/Ui";

import Form from "pages/Form/Form";

import Table from "pages/Table/Table";

import CityAdministration from "pages/CityAdministration/CityAdministration";

import Order from "pages/Order/Order";

import NoMatch from "pages/NoMatch/NoMatch";

import LifeCycle from "pages/Component/LifeCycle";

import styles from "./Content.css";

const { Content } = Layout

class Contents extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }

  render() {
    /* <Breadcrumbs/> */

    return (
      <Content className={styles.content} >
        <Switch>
          <Redirect exact from={`/`} to={`/home`}/>
          <Route path="/home" component={Home} />
          <Route path="/home/:type/:ks?" exact component={Home} />
          <Route path='/ui' component={Ui} />
          <Route path='/form' component={Form} />
          <Route path='/table' component={Table} />
          <Route path='/city' component={CityAdministration} />
          <Route path='/order' component={Order} />
          <Route path='/component' component={LifeCycle} />
          <Route component={NoMatch} />
        </Switch>
      </Content>
    );
  }
}

export default Contents