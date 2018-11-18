import React from 'react';

import { Card, Button, Table, Modal } from 'antd';

import { formateDate} from 'utils/utlis';

import { connect } from 'dva';

import EmptyListContent from 'components/EmptyListContent/EmptyListContent';

import { Pagination} from "utils/Pagination";

import OpenCityForm from "./OpenCityForm/OpenCityForm";

import FilterForm from "./FilterForm/FilterForm";

class CityAdministration extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowOpenCity: false
    }
  }

  page = 1

  limit = 10

  componentDidMount() {
    this.requestList();
  }

  // 默认请求我们的接口数据
  requestList = () => {
    let { page, limit } = this;

    this.props.dispatch({
      type:"CityAdministration/getCityTableList",
      payload:{
        page: page,
        page_size: limit
      }
    })
  }

  handlePaginationChange = (current) => {
    this.page = current
    this.requestList();
  }

  handlePaginationShowSizeChange = (current, page_size) => {
    this.page = current;
    this.limit = page_size;
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
        this.props.dispatch({
          type:"CityAdministration/addCityOpen",
          payload: cityInfo
        })
        this.setState({
          isShowOpenCity: false
        })
      }
    });
  }

  // 接收搜索监听
  onWatchSearch = ( data )=>{
    console.log(data);
  }

  render() {

    let { page, page_size, columns} = this;

    let {isShowOpenCity } = this.state;

    let { list, loaded, errored, totalCount} = this.props; 

    const pagination = Pagination({
      page: page,
      page_size: page_size,
      total_count: totalCount,
    }, this.handlePaginationChange, this.handlePaginationShowSizeChange)

    return (
      <div>
        <Card>
          <FilterForm onWatchSearch={this.onWatchSearch}/>
        </Card>
        <Card style={{ marginTop: 10 }}>
          <Button type="primary" onClick={this.handleOpenCity}>开通城市</Button>
        </Card>
        <div>
          <Table
            bordered
            columns={columns}
            dataSource={list}
            pagination={pagination}
            locale={{
              emptyText: (
                <EmptyListContent
                  loaded={loaded}
                  errored={errored}
                  errorContent={<div>加载失败，<a>重试</a></div>}
                  emptyContent={"all" ? <div>还没有数据？ <a href=''>立即添加</a></div> : <div>暂无相关商品</div>}
                />
              )
            }}
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

          {/* 可以理解为  wrappedComponentRef 接收到 this.prors.from 提交的数据*/}
          <OpenCityForm wrappedComponentRef={
            this.cityFormValue
          } />
        </Modal>
      </div>
    );
  }

  columns = [
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
      render: formateDate
    }, {
      title: '操作人',
      dataIndex: 'sys_user_name'
    }
  ]

}

export default connect(({ CityAdministration }) => {
  return {
    errored: CityAdministration.errored,
    loaded: CityAdministration.loaded,
    list: CityAdministration.list,
    totalCount: CityAdministration.totalCount,
    loading: CityAdministration.loading,
  }
})(CityAdministration);

