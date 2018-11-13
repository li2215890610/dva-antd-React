import axios from 'axios'

import { message } from "antd";
// storageGetItem
import { storageRemoveItem } from "utils/utlis";

import baseURL from "servers/urlConfig";

import qs from 'qs';

let instance = axios.create({
  baseURL: baseURL.base_url,
  timeout: 5000,
  headers: { "Content-Type": 'application/x-www-form-urlencoded', }

});

instance.interceptors.request.use(function (config) {
  // 发送之前  绑定token
  // if (config.url !== `platform/login` && storageGetItem('token')) {
  //   config.headers.Authorization = storageGetItem('token').token;
  // }
  return config;
}, function (error) {
  // 发送出错
  message.warning("刷新页面请重试")
  return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
  // 响应成功
  return response;
}, function (error) {
  console.log(error.response);
  // 响应失败
  return Promise.reject(error);
});


function catchHttpServerError( error){
  if (error && !error.response) {
    message.error("未知错误")
    storageRemoveItem().then((data) => {
      window._history.push({
        pathname: `/login`,
      })
    }).catch((err) => {

    })
  } else if (error.response.status === 403 || error.response.status === 401) {
    message.error(error.response.data.detail)
    storageRemoveItem().then((data) => {
      window._history.push({
        pathname: `/login`,
      })
    }).catch((err) => {

    })
    return
  } else {
    message.error(error.response.data.detail)
    // storageRemoveItem().then((data) => {
    //   window._history.push({
    //     pathname: `/login`,
    //   })
    // }).catch((err) => {

    // })
  }
}


export function requestHttpGET(options) {
  return new Promise((resolve, reject) => {
    instance.get(options.url, { params: options.data }).then((data) => {

      console.log(data)
      if (data.data && data.data.result && data.data.code !== 0) {
        reject(new Error("出错了"));
      }
      else if (data.data && data.data.result && data.data.code === 0) {
        resolve(data.data);
      } else {
        reject(new Error("未知错误"));
      }
    }).catch(function (error) {
      console.log(error.response);
      reject(error)
      catchHttpServerError(error)
    });
  });
}

export function requestHttpPOST(options) {
  return new Promise((resolve, reject) => {

    instance.post(options.url, qs.stringify(options.data)).then((data) => {

      if (data.data && data.data.status && data.data.status.code === 1) {
        reject(new Error(data.data.status.desc));
      }
      else if (data.data && data.data.status && data.data.status.code === 0) {
        resolve(data.data.result);
      } else {
        reject(new Error("未知错误"));
      }

    }).catch(function (error) {
      console.info("error", error.response)
      reject(error)
      catchHttpServerError(error)
    });
  });
}

