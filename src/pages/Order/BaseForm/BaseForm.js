import React from 'react'

import { Input, Select, Form, Button, DatePicker, Row, Col } from 'antd'

import { getOptionList} from 'utils/utlis';

const FormItem = Form.Item;

class FilterForm extends React.Component {

  handleFilterSubmit = () => {
    let fieldsValue = this.props.form.getFieldsValue();
    debugger
    const values = {
      ...fieldsValue,
      'start_time': fieldsValue.start_time ? fieldsValue['start_time'].format('YYYY-MM-DD HH:mm:ss'):"",
      'end_time': fieldsValue.end_time ? fieldsValue['end_time'].format('YYYY-MM-DD HH:mm:ss'):"",
    };

    this.props.filterSubmit(values);
  }

  reset = () => {
    this.props.form.resetFields();
  }

  formList = [
    {
      list: [{ id: '0', name: '全部' }, { id: '1', name: '北京' }, { id: '2', name: '天津' }, { id: '3', name: '上海' }]
    },
    {
      list: [{ id: '0', name: '全部' }, { id: '1', name: '进行中' }, { id: '2', name: '结束行程' }]
    }
  ]



  render() {
    const { getFieldDecorator } = this.props.form;
    let { formList } = this;
    return (
      <div>
        <Form layout="inline">
          <FormItem label="" >
            {
              getFieldDecorator('start_time')(
                <DatePicker showTime={true} placeholder='请输入' format="YYYY-MM-DD HH:mm:ss" />
              )
            }
          </FormItem>
          <FormItem label="~" colon={false} >
            {
              getFieldDecorator('end_time')(
                <DatePicker showTime={true} placeholder='请输入' format="YYYY-MM-DD HH:mm:ss" />
              )
            }
          </FormItem>
          <FormItem key='city'>
            {
              getFieldDecorator('city')(
                <Select
                  style={{ width: '100px' }}
                  placeholder='请选择'
                >
                  {getOptionList(formList[0].list)}
                </Select>
              )
            }
          </FormItem>
          <FormItem key='order_status'>
            {
              getFieldDecorator('order_status')(
                <Select
                  style={{ width: '100px' }}
                  placeholder='请选择'
                >
                  {getOptionList(formList[1].list)}
                </Select>
              )
            }
          </FormItem>
          <FormItem>
            {
              getFieldDecorator('inputValue')(

                <Input type="text" placeholder='请输入搜索内容' />
              )
            }
          </FormItem>

        </Form>
        <Row gutter={24} style={{ marginTop: '20px' }}>
          <Col>
            <Button type="primary" onClick={this.handleFilterSubmit}>查询</Button>
            <Button style={{ margin: '0 20px' }} onClick={this.reset}>重置</Button>
          </Col>
        </Row>

      </div>
    );
  }
}
export default Form.create({})(FilterForm);