
// import jsonpRequset from "jsonp";

import axios from "axios";

let baseApi = 'https://www.easy-mock.com/mock/5ba79d4aac71c35ec6ba705e/antd_basics_ui_react';


export default class jsonp {
  // static jsonp(data) {
  //   return new Promise((resolve, reject) => {
  //     jsonpRequset(data.url, {
  //       param: 'callback'
  //     }, (err, res) => {
  //       debugger
  //       if (res.status === 'success') {
  //         resolve(res.results[0].weather_data[0]);
  //       } else {
  //         reject(new Error(res.messsage));
  //       }
  //     })
  //   })
  // }


  static HttpGet(options) {
    // let loading;
    // if (options.data && options.data.isShowLoading !== false) {
    //   loading = document.getElementById('ajaxLoading');
    //   loading.style.display = 'block';
    // }

    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: 'get',
        baseURL: baseApi,
        timeout: 5000,
        params: (options.data && options.data.params) || ''
      }).then((response) => {
        // if (options.data && options.data.isShowLoading !== false) {
        //   loading = document.getElementById('ajaxLoading');
        //   loading.style.display = 'none';
        // }
        
        if (response.status === 200) {
          let res = response.data;
          if (res.code === 0) {            
            resolve(res);
          } else {
            reject(res);
          }
        } else {
          reject(response.data,null);
        }        
      }).catch((err)=>{        
        reject(err,null)
      })
    });
  }

  static HttpPost(options) {

    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: 'POST',
        baseURL: baseApi,
        timeout: 5000,
        data: options.data
      }).then((response) => {
        // if (options.data && options.data.isShowLoading !== false) {
        //   loading = document.getElementById('ajaxLoading');
        //   loading.style.display = 'none';
        // }
        if (response.status === 200) {
          let res = response.data;
          if (res.code === 0) {
            resolve(null,res);
          } else {
            resolve(res,null);
          }
        } else {
          reject(response.data,null);
        }
      }).catch((err)=>{        
        reject(err,null)
      })
    });
  }
}










