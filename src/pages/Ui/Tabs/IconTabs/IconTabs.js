import React from 'react';

import Successs from "../../Messages/Successs/Successs";

import ErrorNotification from "../../Notifications/ErrorNotification/ErrorNotification";

import Loadings from "../../Loadings/Loadings";

import MessageUtlis from "../../../../utils/MessageUtlis";

import { Tabs, Icon, Radio } from "antd";

const TabPane = Tabs.TabPane;

class IconTabs extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      size:"small"
    }
  }
  changeCallback = (value) => {
    console.log(value);
    
    MessageUtlis.Messages("success",`这是点击了第${value}个模版`,2)
  }

  onChange = (e) =>{
    this.setState({ size: e.target.value });

  }

  render() {

    let { size} = this.state;

    let Tab1 = <span><Icon type="apple" />Tab 1</span>
    let Tab2 = <span><Icon type="android" />Tab 2</span>
    let Tab3 = <span><Icon type="plus" />Tab 3</span>

    return (
      <div>
        <Radio.Group value={size} onChange={this.onChange} style={{ marginBottom: 16 }}>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>

        <Tabs defaultActiveKey="1" size={size} onChange={this.changeCallback}>
          <TabPane tab={Tab1} key="1">
            <Successs/>
          </TabPane>
          <TabPane tab={Tab2}  key="2">
            <ErrorNotification/>
          </TabPane>
          <TabPane tab={Tab3} key="3">
            <Loadings/>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default IconTabs;
