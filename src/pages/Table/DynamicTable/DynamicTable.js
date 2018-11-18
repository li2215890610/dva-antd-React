import React from "react";

import { connect } from 'dva';

import { Table, Button, Modal} from "antd";

import EmptyListContent from 'components/EmptyListContent/EmptyListContent';

import { Pagination} from "utils/Pagination";

import { Messages} from "utils/MessageUtlis";

class DynamicTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  page = 1

  limit = 10

  componentDidMount = () => {

    let { limit, page } = this;

    this.props.dispatch({
      type:"DynamicTable/getDynamicTable",
      payload:{
        page: page,
        page_size: limit
      }
    })
  }

  //点击行
  handleClickRow = (item, index) => {
    Messages('success',`点击了${item.userName}`,2)
  }

  onChangeRowSelection = (selectedItem, selectedRows) => {

    console.log(`selectedItem:`, selectedItem, 'selectedRows: ', selectedRows);

    let selectedRowKey = [];

    for (const key in selectedRows) {
      if (selectedRows.hasOwnProperty(key)) {
        const element = selectedRows[key].id;
        selectedRowKey.push(element)
      }
    }
    this.props.dispatch({
      type:"DynamicTable/handleRequsetData",
      payload:{
        selectedItem: selectedItem,
        selectedRowKey: selectedRows,
      }
    })
  }

  handleDelete = () => {
    this.props.dispatch({
      type:"DynamicTable/handleRequsetData",
      payload:{
        loading: true,
      }
    })

    Modal.confirm({
      title: '提示',
      content: '确定删除?',
      onOk: () => {
        setTimeout(() => {
          this.props.dispatch({
            type:"DynamicTable/handleRequsetData",
            payload:{
              loading: false,
              selectedItem: [],
              selectedRowKey: [],
            }
          })
        }, 1000);
      },
      onCancel: () => {
        this.props.dispatch({
          type:"DynamicTable/handleRequsetData",
          payload:{
            loading: false,
          }
        })
      },
    })
  }

  handlePaginationChange = (current) => {
    
    this.page = current;
    let { limit} = this.limit;
    this.props.dispatch({
      type:"DynamicTable/getDynamicTable",
      payload:{
        page: current,
        page_size: limit
      }
    })
  }

  handlePaginationShowSizeChange = (current, page_size) => {
    console.log(current, page_size);
    this.page = current;
    this.limit = page_size;
    this.props.dispatch({
      type:"DynamicTable/getDynamicTable",
      payload:{
        page: current,
        page_size: page_size
      }
    })
  }

  handleGridSort = (pagination, filters, sorter) => {
    
    console.log(pagination, filters, sorter);
    let { sortedInfo} = this.props;

    this.props.dispatch({
      type:"DynamicTable/handleRequsetData",
      payload:{
        sortedInfo: !sortedInfo,
      }
    })
  }

  render() {

    let { columns, page, limit} = this;

    let { errored, loaded, list, totalCount, loading, selectedItem, sortedInfo} = this.props;

    let rowSelection = {
      selectedRowKeys: selectedItem,
      onChange: this.onChangeRowSelection
    }

    const hasSelected = selectedItem.length > 0;

    let pagination = Pagination({
      page: page,
      page_size: limit,
      total_count: totalCount,
    },this.handlePaginationChange,this.handlePaginationShowSizeChange)

    columns[1].sortOrder = sortedInfo ? 'ascend' : 'descend';

    return (
      <div>
        <div style={{ marginBottom: 16, padding:10 }}>
          <Button
            type="primary"
            onClick={this.handleDelete}
            disabled={!hasSelected}
            loading={loading}
          >
            删除
            </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `当前选中 ${selectedItem.length} 个数据` : ''}
          </span>
        </div>
        <Table
          scroll={{ x: 240 }} // 表头固定 y轴
          rowSelection={rowSelection}
          dataSource={list}
          columns={columns}
          pagination={pagination}
          onChange={this.handleGridSort}
          onRow={(record, index) => {
            //record行的数据   index 索引值
            return {
              //点击行
              onClick: () => {
                this.handleClickRow(record, index)
              },
              // 鼠标移入
              onMouseEnter: () => {
                // console.log(record)
              },
            }
          }}
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
    )
  }


  configState = {
    '1': '咸鱼一条',
    '2': '风华浪子',
    '3': '北大才子',
    '4': '百度FE',
    '5': '创业者',
  }

  configInterest = {
    '1': '游泳',
    '2': '打篮球',
    '3': '踢足球',
    '4': '跑步',
    '5': '爬山',
    '6': '骑行',
    '7': '桌球',
    '8': '麦霸'
  }

  columns = [
    {
      title: "id",
      key: "id",
      fixed: 'left',
      dataIndex: "id",
    }, {
      title: "用户名",
      key: "userName",
      dataIndex: "userName",
      sorter: true,
      // sortOrder: this.state.sortedInfo ? 'ascend' : 'descend',
    }, {
      title: "性别",
      key: "sex",
      dataIndex: "sex",
      render: (value, record) => {
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
      key: "state",
      dataIndex: "state",
      render: (value, record) => {
        // value 是值
        // record 是这一行的值
        return this.configState[value]
      }

    }, {
      title: "爱好",
      key: "interest",
      dataIndex: "interest",
      render: (value, record) => {
        return this.configInterest[value]
      }
    }, {
      title: "生日",
      key: "birthday",
      dataIndex: "birthday",
    }, {
      title: "地址",
      key: "address",
      dataIndex: "address",
    }, {
      title: "早起时间",
      key: "time",
      dataIndex: "time",
    }
  ];

}


export default connect(({ DynamicTable }) => {
  return {
    errored: DynamicTable.errored,
    loaded: DynamicTable.loaded,
    list: DynamicTable.list,
    totalCount: DynamicTable.totalCount,
    loading: DynamicTable.loading,
    selectedItem: DynamicTable.selectedItem,
    selectedRowKey: DynamicTable.selectedRowKey,
    sortedInfo: DynamicTable.sortedInfo
  }
})(DynamicTable);