import React from 'react';

import Successs from "../../Messages/Successs/Successs";

import ErrorNotification from "../../Notifications/ErrorNotification/ErrorNotification";

import Loadings from "../../Loadings/Loadings";

import { Messages} from "utils/MessageUtlis";

import { Tabs } from "antd";

const TabPane = Tabs.TabPane;

class BasicsTabs extends React.Component {

  changeCallback = (value) => {
    console.log(value);
    
    Messages("success",`这是点击了第${value}个模版`,2)
  }

  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1" onChange={this.changeCallback}>
          <TabPane tab="Tab 1" key="1">
            <Successs/>
          </TabPane>
          <TabPane tab="Tab 2" disabled key="2">
            <ErrorNotification/>
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            <Loadings/>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default BasicsTabs;
