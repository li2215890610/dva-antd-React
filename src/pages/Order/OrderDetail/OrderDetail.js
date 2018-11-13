import React from 'react';

//倒入 connect 连接组件
import { connect } from 'dva';

import { Card, Table } from 'antd';

import BaseForm from "../BaseForm/BaseForm";

import EmptyListContent from 'components/EmptyListContent/EmptyListContent';

import { formateDate} from 'utils/utlis';

import { Pagination} from "utils/Pagination";

class OrderDetail extends React.Component {
  constructor(props) {
    super(props)
    this.setState = {
      
    }
  }

  page = 1

  pageSize = 10

  componentDidMount() {
    this.requestList();
  }

  // 默认请求我们的接口数据
  requestList = () => {

    let { page, pageSize } = this;

    this.props.dispatch({
      type: 'OrderDetail/getTableList',
      payload: {
        page: page,
        page_size: pageSize
      }
    })
  }

  handlePaginationChange = (current) => {
    let { pageSize} = this;
    this.page = current
    this.props.dispatch({
      type: 'OrderDetail/getTableList',
      payload: {
        page: current,
        page_size: pageSize
      }
    })
  }

  handlePaginationShowSizeChange = (current, page_size) => {
    this.page = current;
    this.pageSize = page_size;
    this.props.dispatch({
      type: 'OrderDetail/getTableList',
      payload: {
        page: current,
        page_size: page_size,
      }
    })
  }

  handleFilter = (data) =>{
    // 接收子组件数据
    console.log(data);
    let { pageSize, page } = this;
    this.props.dispatch({
      type: 'OrderDetail/getTableList',
      payload: {
        ...data,
        page_size: pageSize,
        page: page
      }
    })
  }


  render() {

    let { columns, page, pageSize} = this;

    let { list, totalCount, loaded, errored} = this.props;

    let pagination = Pagination({
      page_size: pageSize,
      page: page,
      total_count: totalCount,
    }, this.handlePaginationChange, this.handlePaginationShowSizeChange)

    return (
      <div>
        <Card>
          <BaseForm  filterSubmit={this.handleFilter}/>
        </Card>
        <div>
          <Table
            bordered
            columns={columns}
            dataSource={list}
            pagination={pagination}
            locale={{
              emptyText:(
                <EmptyListContent
                  loaded={ loaded } 
                  errored={ errored }
                  errorContent={<div onClick={this.requestList}>加载失败，<a>重试</a></div>}
                  emptyContent={ "all" ? <div>还没有数据？ <a href='' onClick={this.requestList}>立即添加</a></div> : <div>暂无相关数据</div>}
                />
              )
            }}
          />
        </div>
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
      render: (op_mode, record) => (
        <span>
          {op_mode === 1 ? '自营' : '加盟'}
        </span>
      ),
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
        let time = formateDate(value)
        return time
      }
    }, {
      title: '操作人',
      dataIndex: 'sys_user_name'
    }
  ]

}

//  在任何页面都可以链接modal 然后导出你所需要的数据来处理 
// connect 连接modal  导出数据 
// 导出数据的数据用this.props 取出
export default connect(({ OrderDetail }) => {
  return {
    list: OrderDetail.list,
    totalCount: OrderDetail.totalCount,
    loaded: OrderDetail.loaded,
    errored: OrderDetail.errored,
  }
})(OrderDetail);


