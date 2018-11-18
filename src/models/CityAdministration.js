
import { getCityTableList, addCityOpen } from 'services/CityAdministration';

export default {
  namespace: 'CityAdministration', 
  state: { 
    list: [],
    errored: false,
    loaded: false,
    totalCount: 0,
    loading: false,
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
  effects: {
    * getCityTableList({ payload: data }, { put, call }) {
      yield put({
        type: 'handleRequsetData',
        payload: {
          loaded: false,
        }
      });

      //call(ajax的方法,ajax需要的参数)
      const result = yield call(getCityTableList, {
        ...data
      });
      console.log(result)
      if (result) {
        console.log(result);
        result.result.item_list.map((item,index,array)=>{
          return item.key = index;
        })

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
    * addCityOpen({ payload: data }, { put, call }) {
      const result = yield call(addCityOpen, {
        ...data
      });

      if (result) {
        yield put({
          type: 'getCityTableList',
          payload: {
            page_size:10,
            page: 1
          }
        });
      }
    }
    
  },
  // 订阅数据
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {  
        
      });
    },
  }
};

