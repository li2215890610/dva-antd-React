import React from "react";

import moment  from "moment";


import "../../Form.less";

import { Card, Form, Input, Checkbox, Radio, Select, Switch, DatePicker, TimePicker, Upload, Icon, Button, InputNumber,message } from "antd";

const FormItem = Form.Item;

const RadioGroup = Radio.Group;

const Option = Select.Option;

const TextArea = Input.TextArea;

class BasicsTest extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      userName: "张三",
      password: "22222",
      radioValue: 1,
      age: 18,
      userSeate: "",
      userHobby: [2,3],
      isMarried: true,
      checkboxs: true,
      birthday: moment("2018-01-01"),
      timePicker: "",
      address: "北京市恒通国际创新园C9蓝色光标北门",
      imageUrl: "",
    }    
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)

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
      this.getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }));
    }
  }



  handleChangeUserName = (e) =>{
    this.setState({
      userName:e.target.value
    })
  } 

  handleChangePassword = (e) =>{
    this.setState({
      password:e.target.value
    })
  }

  handleChangeRadioGroup = (e) => {    
    this.setState({
      radioValue: e.target.value,
    })
  }

  handleChangeAge = ( e ) => {        
    this.setState({
      age: e
    })
  }

  handleChangeUserSeate = ( e )=>{
    console.log(e);
    this.setState({
      userSeate:e
    })
  }

  handleChangeUserHobby = (e)=>{    
    this.setState({
      userHobby:e
    })

  }
  
  handleChangeSwitch = (checked) =>{    
    this.setState({
      isMarried:checked
    })
  }

  handleChangeCheckbox = (e) =>{
    this.setState({
      checkboxs:e.target.checked
    })
  }

  handleChangeBirthday = (date, dateString) =>{
    this.setState({
      birthday: moment(dateString)
    },()=>{
      // console.log(this.state.birthday)
      // console.log(dateString)
    })
  }

  handleChangeTimePicker = ( time, timeString) =>{
    console.log(time,timeString);
    this.setState({
      timePicker: timeString
    })
  }

  handleChangeTextArea = ( e ) =>{
    console.log(e.target.value);
    
    this.setState({
      address:e.target.value
    })
  }

  render (){

    let { userName, password, radioValue, age, userSeate, userHobby, isMarried, checkboxs, birthday, timePicker, address,imageUrl, loading} = this.state;

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
    
    let uploadButton = (
      <div>
        <Icon type={loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text"></div>
      </div>
    );
    
    console.log(this.props.data);
    
    return(
      <div>
          <Card title="注册表单" className="card">
            <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
              <FormItem label="用户名" {...FormItemLayout}>
                <Input prefix={<Icon type="user"/>} style={{width:'300px'}} onPressEnter={this.handleChangeUserName} onChange={this.handleChangeUserName} value={userName} placeholder="请输入用户名" />
              </FormItem>

              <FormItem label="密码" {...FormItemLayout}>
                  <Input prefix={<Icon type="lock"/>} type="password" onPressEnter={this.handleChangePassword} onChange={this.handleChangePassword} value={password} style={{width:'300px'}} placeholder="请输入密码" />
              </FormItem>

              <FormItem label="性别" {...FormItemLayout}>
                <RadioGroup onChange={this.handleChangeRadioGroup} value={radioValue} style={{width:'300px'}}>
                  <Radio value={1}>男</Radio>
                  <Radio value={2}>女</Radio>
                  <Radio value={3}>不男不女</Radio>
                </RadioGroup>
              </FormItem>

              <FormItem label="年龄" {...FormItemLayout}>
                <InputNumber min={1} max={30} onChange={this.handleChangeAge} value={age} style={{width:'300px'}}/>
              </FormItem>

              <FormItem label="当前状态 -- 单选框" {...FormItemLayout}>
                <Select onChange={this.handleChangeUserSeate} style={{width:'300px'}} value={userSeate}>
                  <Option value="">请选择</Option>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                  <Option value="6">6</Option>
                </Select>
              </FormItem>

              <FormItem label="爱好 -- 多选框" {...FormItemLayout}>
                <Select mode="multiple"  onChange={this.handleChangeUserHobby} value={userHobby} style={{width:'300px'}}>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                  <Option value="6">6</Option>
                </Select>
              </FormItem>

              <FormItem label="是否已婚" {...FormItemLayout}>
                <Switch onChange={this.handleChangeSwitch} checked={isMarried}/>
              </FormItem>    

              <FormItem label="是否方便" {...FormItemLayout}>
                <Checkbox onChange={this.handleChangeCheckbox} checked={checkboxs}></Checkbox>
              </FormItem>    

              <FormItem label="联系地址" {...FormItemLayout}>
                <TextArea value={address} autosize={true} onChange={this.handleChangeTextArea}/>
              </FormItem>   

              <FormItem label="生日" {...FormItemLayout}>
                <DatePicker showTime format="YYYY-MM-DD" value={birthday}  onChange={this.handleChangeBirthday}/>
              </FormItem>   

              <FormItem label="早起时间" {...FormItemLayout}>
                <TimePicker  time={timePicker}  onChange={this.handleChangeTimePicker}/>
              </FormItem> 

              <FormItem label="头像" {...FormItemLayout}>
                <Upload
                  listType="picture-card"
                  showUploadList={false}
                  action="//jsonplaceholder.typicode.com/posts/"
                  beforeUpload={this.beforeUpload}
                  onChange={this.handleChange}
                >
                  {imageUrl ? <img alt='' src={imageUrl}/> : uploadButton}
                </Upload>
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



export default BasicsTest;