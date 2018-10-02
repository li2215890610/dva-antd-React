import React from "react";

import { Table, Button, Modal
 } from "antd";

import Pagination from "../../../../utils/Pagination";

import EmptyListContent from '../../../../components/EmptyListContent/EmptyListContent';

import httpRequest from "../../../../servers/request";

import MessageUtlis from "../../../../utils/MessageUtlis";

class DynamicTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSourceDynamic: [],
      selectedRowKeys: [],
      selectedRowKey: [],
      loading: false,
      sortedInfo: true,
    }
  }

  page = 1

  limit = 10

  componentDidMount = ()=>{
    let { limit, page } = this;
    httpRequest.HttpGet({url:'/table/list',data:{
      params:{
        page: page,
        page_size: limit
      }
    }}).then((res)=>{

      if (res.code === 0) {

        res.result.list.map((item,index)=>{
           return item.key = index
        })
        this.setState({
          dataSourceDynamic:res.result.list,
          pagination:Pagination.Pagination(res,this.handlePaginationChange,this.handlePaginationShowSizeChange)
        })
      }
    }).then((err)=>{
      if (err) {
        MessageUtlis.Messages('error','调用失败',2)
      }
    })    
  }

  //点击行
  handleClickRow = ( item, index)=>{

    MessageUtlis.Messages('success',`点击了${item.userName}`,2)
  }

  onChangeRowSelection = ( selectedRowKeys, selectedRows)=>{

    console.log(`selectedRowKeys:`, selectedRowKeys, 'selectedRows: ', selectedRows);

    let selectedRowKey = [];

    for (const key in selectedRows) {
      if (selectedRows.hasOwnProperty(key)) {
        const element = selectedRows[key].id;        
        selectedRowKey.push(element)
      }
    }
    
    this.setState({
      selectedRowKeys,
      selectedRowKey: selectedRows
    })

  }

  handleDelete = () => {
    this.setState({ loading: true });
    Modal.confirm({
      title: '提示',
      content: '确定删除?',
      onOk:()=> {
        setTimeout(() => {
          this.setState({
            selectedRowKeys: [],
            selectedRowKey:[],
            loading: false,
          });
        }, 1000);
      },
      onCancel:()=> {
        this.setState({
          loading: false,
        });
      },
    })

  }

  handlePaginationChange = (current)=>{
    this.setState({
      page: current,
    })
    
  }

  handlePaginationShowSizeChange = ( current, page_size)=>{
    console.log(current, page_size);
    this.setState({
      page :current, 
      page_size
    })
  }

  handleGridSort = (pagination, filters, sorter) =>{
    console.log(pagination, filters, sorter);
    this.setState({
      sortedInfo: ! this.state.sortedInfo
    })
  }

  render() {
    let { dataSourceDynamic, selectedRowKeys, loading, pagination, sortedInfo } = this.state;
    
    let configState  = {
        '1':'咸鱼一条',
        '2':'风华浪子',
        '3':'北大才子',
        '4':'百度FE',
        '5':'创业者',
    }
    let configInterest = {
        '1': '游泳',
        '2': '打篮球',
        '3': '踢足球',
        '4': '跑步',
        '5': '爬山',
        '6': '骑行',
        '7': '桌球',
        '8': '麦霸'
    }
    const columns = [
      {
        title: "id",
        key:"id",
        fixed: 'left',
        dataIndex: "id",
      }, {
        title: "用户名",
        key:"userName",
        dataIndex: "userName",
        sorter: true,
        sortOrder: sortedInfo ? 'ascend':'descend',
      }, {
        title: "性别",
        key:"sex",
        dataIndex: "sex",
        render:(value,record)=>{
          // value 是值
          // record 是这一行的值
          if (value === 1) {
            return '男'
          }
          if (value === 2) {
            return '女'
          }
          if (value === 3) {
            return '不男不女'
          }       
        }
      }, {
        title: "状态",
        key:"state",
        dataIndex: "state",
        render:(value,record)=>{
          // value 是值
          // record 是这一行的值
          return configState[value]     
        }
        
      }, {
        title: "爱好",
        key:"interest",
        dataIndex: "interest",
        render:(value,record)=>{
          
          return configInterest[value]
        }
      }, {
        title: "生日",
        key:"birthday",
        dataIndex: "birthday",
      }, {
        title: "地址",
        key:"address",
        dataIndex: "address",
      }, {
        title: "早起时间",
        key:"time",
        dataIndex: "time",
      }
    ];

    let rowSelection = {
      selectedRowKeys: selectedRowKeys,
      onChange: this.onChangeRowSelection
    }

    const hasSelected = selectedRowKeys.length > 0;

    return (
      <div>
          <div style={{ marginBottom: 16 }}>
            <Button
              type="primary"
              onClick={this.handleDelete}
              disabled={!hasSelected}
              loading={loading}
            >
              删除
            </Button>
            <span style={{ marginLeft: 8 }}>
              {hasSelected ? `当前选中 ${selectedRowKeys.length} 个数据` : ''}
            </span>
          </div>
          <Table
            scroll={{ x: 240 }} // 表头固定 y轴
            rowSelection={rowSelection}
            dataSource={dataSourceDynamic}
            columns={columns}
            pagination={pagination}
            onChange={this.handleGridSort}
            onRow={(record,index) => {
              //record行的数据   index 索引值
              return {
                //点击行
                onClick: () => {
                  this.handleClickRow(record,index)
                },     
                // 鼠标移入
                onMouseEnter: () => {
                  // console.log(record)
                },
              }
            }}
            locale={{
              emptyText:(
                <EmptyListContent
                  loaded={ true } 
                  errored={ true }
                  errorContent={<div>加载失败，<a>重试</a></div>}
                  emptyContent={ "all" ? <div>还没有商品？ <a href=''>立即添加</a></div> : <div>暂无相关商品</div>}
                />
              )
            }}
          />
      </div>
    )
  }
}

export default DynamicTable;