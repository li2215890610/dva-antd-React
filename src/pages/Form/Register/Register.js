import React from "react";

import  "./../Form.less";

import { Card,Tabs } from "antd";

import BasicsTest from "./BasicsTest/BasicsTest";

import AddTest from "./AddTest/AddTest";

import UpdateTest from "./UpdateTest/UpdateTest";

const TabPane = Tabs.TabPane;


class Register extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      
    }    
  }

  render (){

    return(
      <div>
          <Card title="注册表单" className="card">
            <Tabs defaultActiveKey="3" onChange={this.handleChangeTabs} animated={false}>
              <TabPane tab="默认演示" key="1">
                <BasicsTest data="1"/>
              </TabPane>
              <TabPane tab="antd方法演示新增" key="2">
                <AddTest data="2"/>
              </TabPane>
              <TabPane tab="antd方法演示更新" key="3">
                <UpdateTest data="3"/>
              </TabPane>
            </Tabs>
          </Card>
      </div>
    )
  }
}



export default Register;