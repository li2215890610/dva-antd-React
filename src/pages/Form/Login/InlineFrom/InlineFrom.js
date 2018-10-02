import React from "react";

import { Form,Input, Button } from "antd";

const FormItem = Form.Item;

class InlineFrom extends React.Component{
  constructor(props) {
    super(props)
    this.state = {

    }    
  }

  render (){
    return(
      <div>
        <Form layout="inline">
          <FormItem>
            <Input  placeholder="请输入用户名"/>
          </FormItem>
          <FormItem>
            <Input placeholder="请输入账号"/>
          </FormItem>
          <FormItem>
            <Button type="primary">确定</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default InlineFrom;