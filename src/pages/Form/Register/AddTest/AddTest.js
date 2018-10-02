import React from "react";

// import moment  from "moment";

// import locale from 'antd/lib/date-picker/locale/zh_CN';

import "../../Form.less";

import Message from "../../../../utils/MessageUtlis";

import { Card, Form, Input, Checkbox, Radio, Select, Switch, Upload, Icon, Button, InputNumber,message } from "antd";
  // DatePicker, TimePicker, 
 

const FormItem = Form.Item;

const RadioGroup = Radio.Group;

const Option = Select.Option;

const TextArea = Input.TextArea;

class AddTest extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      imageUrl:"",
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
  }


  beforeUpload = (file)=> {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      message.error('只能上传 JPG 格式 ');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('图片超过 2M');
    }
    return isJPG && isLt2M;
  }

  getBase64 = (img, callback)=> {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }));
    }


  }

  render (){

    let {  imageUrl, loading} = this.state;

    const { getFieldDecorator } = this.props.form;

    let FormItemLayout = {
      labelCol:{
        xs:24,
        sm:4,
      },
      wrapperCol:{
        xs:24,
        sm:20
      }
    }
    
    const uploadButton = (
      <div>
        <Icon type={loading ? 'loading' : 'plus'} />
      </div>
    );

    console.log(this.props.data);

    return(
      <div>
          <Card title="注册表单" className="card">
            <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
              <FormItem label="用户名" {...FormItemLayout}>
                {
                  getFieldDecorator("userName", {
                    initialValue: "",
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
              <FormItem label="密码" {...FormItemLayout}>
                {
                  getFieldDecorator("userPwd", {
                    initialValue: "",
                    rules: [
                      {
                        required: true,
                        message: "密码为必填项",
                      },{
                        min:2,
                        max:5,
                        message:"最小长度为两位,最大长度为五位"
                      }
                    ]
                  })(
                    <Input prefix={<Icon type="lock"/>} type="password" style={{width:'300px'}} placeholder="请输入密码" />
                  )
                }
              </FormItem>
              <FormItem label="性别" {...FormItemLayout}>
                {
                  getFieldDecorator("sex", {
                    initialValue: 1,
                    
                  })(
                    <RadioGroup style={{width:'300px'}}>
                      <Radio value={1}>男</Radio>
                      <Radio value={2}>女</Radio>
                      <Radio value={3}>不男不女</Radio>
                    </RadioGroup>
                  )
                }
              </FormItem>
              <FormItem label="年龄" {...FormItemLayout}>
                {
                  getFieldDecorator("age", {
                    initialValue: '',
                    rules: [
                      {
                        required: true,
                        message: "年龄必填项",
                      }
                    ]
                  })(
                    <InputNumber 
                      min={0}
                      max={30} 
                      style={{width:'300px'}}
                      placeholder="请填写年龄"
                    />
                  )
                }
              </FormItem>

              <FormItem label="当前状态" {...FormItemLayout}>
                {
                  getFieldDecorator("seate", {
                    initialValue: '',
                    rules: [
                      {
                        required: true,
                        message: "当前状态必填项",
                      }
                    ]                   
                    
                  })(
                   <Select placeholder='请选择状态' style={{width:'300px'}}>
                     <Option value="">请选择状态</Option>
                     <Option value="1">1</Option>
                     <Option value="2">2</Option>
                     <Option value="3">3</Option>
                     <Option value="4">4</Option>
                     <Option value="5">5</Option>
                     <Option value="6">6</Option>
                   </Select>
                  )
                }
              </FormItem>
              <FormItem label="爱好" {...FormItemLayout}>
                {
                  getFieldDecorator("hobby", {
                    initialValue: [],
                    rules: [
                      {
                        required: true,
                        message: "爱好必填项",
                      }
                    ]  
                  })(
                   <Select placeholder='请选择爱好' mode="multiple" style={{width:'300px'}}>
                     <Option value="1">1</Option>
                     <Option value="2">2</Option>
                     <Option value="3">3</Option>
                     <Option value="4">4</Option>
                     <Option value="5">5</Option>
                     <Option value="6">6</Option>
                   </Select>
                  )
                }
              </FormItem>


              <FormItem label="是否方便" {...FormItemLayout}>
                {
                  getFieldDecorator("checked", {
                    initialValue: false,
                  })(
                    <Checkbox ></Checkbox>
                    )
                }
              </FormItem>    

              <FormItem label="是否已婚" {...FormItemLayout}>
                {
                  getFieldDecorator("switchs", {
                    initialValue: false,
                  })(
                    <Switch />
                  )
                }
              </FormItem>    

              {/* <FormItem label="生日" {...FormItemLayout}>
                {
                  getFieldDecorator("birthday", {
                    initialValue: '',
                    
                  })(
                    <DatePicker locale={locale} showTime format="YYYY-MM-DD"/>
             
                  )
                }
              </FormItem>    */}

              <FormItem label="联系地址" {...FormItemLayout}>
                {
                  getFieldDecorator("address", {
                    initialValue: '',
                    rules: [
                      {
                        required: true,
                        message: "爱好必填项",
                      }
                    ]  
                  })(
                    <TextArea autosize={true}/>
                  )
                }
              </FormItem>   

              {/* <FormItem label="早起时间" {...FormItemLayout}>
                {
                  getFieldDecorator("timePicker", {
                    initialValue: '',
                  })(
                    <TimePicker />
                  )
                }
              </FormItem>  */}

              <FormItem label="头像" {...FormItemLayout}>
                {
                  getFieldDecorator("imageUrl", {
                    initialValue: imageUrl,
                    rules: [
                      {
                        required: true,
                        message: "头像为必上传",
                      }
                    ]  

                  })(
                    <Upload
                      listType="picture-card"
                      showUploadList={false}
                      action="//jsonplaceholder.typicode.com/posts/"
                      beforeUpload={this.beforeUpload}
                      onChange={this.handleChange}
                    >
                      {imageUrl ? <img alt=''  src={imageUrl}/> : uploadButton}
                    </Upload>
                  )
                }
              </FormItem> 

              <FormItem>
                <Button type="primary" htmlType="submit">确定</Button>
              </FormItem>
            </Form>
          </Card>
      </div>
    )
  }
}



export default Form.create()(AddTest);