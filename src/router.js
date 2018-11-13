import React from 'react';

import { Router, Route, Switch } from 'dva/router';

import Login from "./pages/Login/Login";

import Admin from "./Admin";

// 使用antd 内置语言
import { LocaleProvider } from 'antd';

import zhCN from 'antd/lib/locale-provider/zh_CN';

// 全局设置 locale 日期插件中文显示
// import 'moment/locale/zh-cn';

// import moment from 'moment';

// moment.locale('zh-cn');


function RouterConfig({ history }) {
  return (
    <LocaleProvider locale={zhCN}>
      <Router history={history}>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/" render={( props )=>(
            <Admin/>
          )} />
        </Switch>
      </Router>
    </LocaleProvider>
  );
}

export default RouterConfig;
