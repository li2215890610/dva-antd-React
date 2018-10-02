import React from 'react';

import { Card, Table, Modal } from 'antd';

import BaseForm from "../BaseForm/BaseForm";

import httpRequest from '../../../servers/request';

import Utils from '../../../utils/utlis';

import Pagination from "../../../utils/Pagination";

import MessageUtlis from "../../../utils/MessageUtlis";

class OrderDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      List: [],
      isShowOpenCity: false
    }
  }

  page = 1

  page_size = 10

  componentDidMount() {
    this.requestList();
  }

  // 默认请求我们的接口数据
  requestList = () => {
    let { page } = this;
    httpRequest.HttpGet({
      url: '/open_city',
      data: {
        page: page
      }
    }).then((res) => {
      let List = res.result.item_list.map((item, index) => {
        item.key = index;
        return item;
      });
      this.setState({
        List,
        Pagination: Pagination.Pagination(res, this.handlePaginationChange, this.handlePaginationShowSizeChange)
      })
    })
  }

  handlePaginationChange = (current) => {
    this.page = current
    this.requestList();
  }

  handlePaginationShowSizeChange = (current, page_size) => {
    console.log(current, page_size);
    this.page = current;
    this.page_size = page_size;
    this.requestList();
  }

  // 开通城市
  handleOpenCity = () => {
    this.setState({
      isShowOpenCity: true
    })
  }

  cityFormValue = (value) => {
    this.cityForm = value
  }

  // 城市开通提交
  handleSubmit = () => {

    let cityInfo =  this.cityForm.props.form.getFieldsValue();

    this.cityForm.props.form.validateFields((err,data)=>{

      if (!err) {
        httpRequest.HttpGet({
          url: '/city/open',
          data: {
            params: cityInfo
          }
        }).then((res) => {
          if (res.code === 0) {
            MessageUtlis.Messages('success','开通成功');
            this.setState({
              isShowOpenCity: false
            })
            this.requestList();
          }
        })
      }
    });
  }

  // 接收搜索监听
  onWatchSearch = ( data )=>{
    console.log(data);
  }

  handleFilter = (data) =>{
    console.log(data);
  }

  render() {
    const columns = [
      {
        title: '城市ID',
        dataIndex: 'id'
      }, {
        title: '城市名称',
        dataIndex: 'name'
      }, {
        title: '用车模式',
        dataIndex: 'mode',
        render(mode) {
          return mode === 1 ? '停车点' : '禁停区';
        }
      }, {
        title: '营运模式',
        dataIndex: 'op_mode',
        render(op_mode) {
          return op_mode === 1 ? '自营' : '加盟';
        }
      }, {
        title: '授权加盟商',
        dataIndex: 'franchisee_name'
      }, {
        title: '城市管理员',
        dataIndex: 'city_admins',
        render(arr) {
          return arr.map((item) => {
            return item.user_id;
          })
        }
      }, {
        title: '城市开通时间',
        dataIndex: 'open_time'
      }, {
        title: '操作时间',
        dataIndex: 'update_time',
        render(value){
          let time = Utils.formateData(value)
          return time
        }
      }, {
        title: '操作人',
        dataIndex: 'sys_user_name'
      }
    ]

    let { Pagination, List, isShowOpenCity } = this.state;

    return (
      <div>
        <Card>
          <BaseForm  filterSubmit={this.handleFilter}/>
        </Card>
        <Card style={{ marginTop: 10 }}>

        </Card>
        <div>
          <Table
            bordered
            columns={columns}
            dataSource={List}
            pagination={Pagination}
          />
        </div>
        <Modal
          title="开通城市"
          visible={isShowOpenCity}
          onCancel={() => {
            this.setState({
              isShowOpenCity: false
            })
          }}
          onOk={this.handleSubmit}
        >

          
        </Modal>
      </div>
    );
  }
}



export default OrderDetail;