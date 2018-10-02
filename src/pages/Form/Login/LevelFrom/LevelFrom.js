import React from "react";

import { Form, Input, Button, Icon, Checkbox} from "antd";

import Message from "../../../../utils/MessageUtlis";

const FormItem = Form.Item;

class LevelFrom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  handleSubmit = (e) => {
   e.preventDefault();
   let userInfo =  this.props.form.getFieldsValue();
   console.log(userInfo);
   this.props.form.validateFields((err,data)=>{
    if (!err) {
      Message.Messages('success',`${userInfo.userName},恭喜你通过验证,当前密码为${userInfo.userPwd}`,2)
    }
   })
    return
  }
  render() {
    //this.props.form 是antd自动帮我们封装的 只要创建完from表单自动会帮我们拿到
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form onSubmit={this.handleSubmit.bind(this)} layout="horizontal">
          <FormItem>
            {
              getFieldDecorator("userName", {
                initialValue: "张三",
                rules: [
                  {
                    required: true,
                    message: "用户名为必填项",
                  }
                ]
              })(
                <Input prefix={<Icon type="user"/>} style={{width:'300px'}} placeholder="请输入用户名" />
              )
            }
          </FormItem>
          <FormItem>
            {
              getFieldDecorator("userPwd", {
                initialValue: "",
                rules: [
                  {
                    required: true,
                    message: "账号为必填项",
                  },
                  {
                    min:2,
                    max:4,
                    message:"最小长度2,最大长度4"
                  }
                ]

              })(
                <Input prefix={<Icon type="lock"/>} style={{width:'300px'}} placeholder="请输入账号" />
              )
            }
          </FormItem>
          <FormItem>
            {
              getFieldDecorator("remember", {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>记住密码</Checkbox>
              )
            }
            <a href="">忘记密码</a>
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">确定</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

//必须要声明 传递进去  --- 固定套路
// const LevelFroms = Form.create()(LevelFrom);


export default Form.create()(LevelFrom);