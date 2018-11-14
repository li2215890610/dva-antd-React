
import { getDynamicTable } from 'services/DynamicTable';

export default {
  namespace: 'DynamicTable', 
  state: { 
    list: [],
    errored: false,
    loaded: false,
    totalCount: 0,
    loading: false,
    selectedItem: [],
    selectedRowKey: [],
    sortedInfo: false,
  },
  reducers: { // 定义处理数据 或者 事件
    //  触发 dispatch 的名称（页面的数据,传进来的参数）
    'handleRequsetData'(state, { payload: data }) {  
      console.log(state);
      console.log(data);
      // 处理之后返回
      return {
        ...state,
        ...data
      }
    }
  },
  //处理异步请求及逻辑   可以 dispatch触发 
  effects: {
     //  声明触发的名称 ({payload 是 dispatch过来的参数},{ put 相当于发送一个 dispatch 触发 action , call 发送ajax处理异步请求})
    * getDynamicTable({ payload: data }, { put, call }) {
      yield put({
        type: 'handleRequsetData',
        payload: {
          loaded: false,
        }
      });

      //call(ajax的方法,ajax需要的参数)
      const result = yield call(getDynamicTable, {
        ...data
      });
      console.log(result)
      if (result) {
        console.log(result);
        result.result.list.map((item,index,array)=>{
          return item.key = index;
        })
       // put 相当于发送一个 dispatch 触发 action
        yield put({
          type: 'handleRequsetData',
          payload: {
            loaded:  data.page === 1 && result.result.list.length === 0 ? true: false,
            errored:  data.page === 1 && result.result.list.length === 0 ? false: true,
            list: result.result.list,
            totalCount: result.total_count,
          }
        });
      }else{
        yield put({
          type: 'handleRequsetData',
          payload: {
            loaded: true,
            errored: true,
          }
        });
      }
    },
  },
  // 订阅数据
  subscriptions: {
    //history 监听路由变化、dispatch 触发 effects与reducers 的方法
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {  // 判断第一次进入组件 就触发的ajax请求 但是不建议这样
        
        // console.log(pathname);
      });
    },
  }
};

