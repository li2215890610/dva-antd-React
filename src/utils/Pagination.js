
export function Pagination(data, onChange, onShowSizeChange) {
  return {
    onChange: (current) => {
      onChange(current)
    },
    // defaultCurrent: data.page, //默认的当前页数 默认值是1
    // defaultPageSize: data.page_size, //默认的每页条数 默认值是10
    current: data.page, //当前页数
    pageSize: data.page_size, // 每页条数
    total: data.total_count, //数据总数
    showTotal: () => { //用于显示数据总量和当前数据顺序
      return `共${data.total_count}条`
    },
    showSizeChanger: true, //是否可以该别 page_size 
    onShowSizeChange: (current, size) => {
      onShowSizeChange(current, size)
    },
    showQuickJumper: true, //是否可以快速跳转至某页
    hideOnSinglePage: true, //只有一页时是否隐藏分页器
  }
}