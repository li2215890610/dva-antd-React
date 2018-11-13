
//  定义文件ajax文件 
import { getOrderList } from 'services/OrderDetail';

// dispatch 发出事件 （ps: action 是执行的意思）
// reducers  处理数据（ps: 理解为处理同步数据）
// effects 异步事件及逻辑
// subscriptions 订阅数据
export default {
  namespace: 'OrderDetail', // 定义model 的命名空间，同时也是他在全局 state 上的属性，只能用字符串，不支持通过 . 的方式创建多层命名空间
  state: { 
    // 初始值  页面上的数据 
    list: [],
    totalCount: 0, //数据总数
    errored: false,
    loaded: false,
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
    * getTableList({ payload: data }, { put, call, select }) {
      yield put({
        type: 'handleRequsetData',
        payload: {
          loaded: false,
        }
      });

      const todos = yield select(state => state.OrderDetail.page);
      console.log(todos) 

      //call(ajax的方法,ajax需要的参数)
      const result = yield call(getOrderList, {
        ...data
      });

      if (result) {
        console.log(result);
        result.result.item_list.map((item,index,array)=>{
          return item.key = index;
        })
       // put 相当于发送一个 dispatch 触发 action
        yield put({
          type: 'handleRequsetData',
          payload: {
            loaded:  data.page === 1 && result.result.item_list.length === 0 ? true: false,
            errored:  data.page === 1 && result.result.item_list.length === 0 ? false: true,
            list: result.result.item_list,
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
    * handleSubmit({ payload: data},{put, call}){
      const result = yield call(getOrderList, {
        ...data
      });

      if (result) {
        yield put({
          type: 'getTableList',
          payload: {
            page: 1,
            page_size: 10,
          }
        });
      }
    }
  },
  // 订阅数据
  subscriptions: {
    //history 监听路由变化、dispatch 触发 effects与reducers 的方法
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {  // 判断第一次进入组件 就触发的ajax请求 但是不建议这样
        
        console.log(pathname);
        // dispatch({
        //   type: 'getTableList',
        //   payload: "ssss"
        // });
      });
    },
  }
};

