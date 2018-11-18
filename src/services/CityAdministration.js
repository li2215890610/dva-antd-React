import { requestHttpGET, requestHttpPOST } from 'servers/request';

import { message } from "antd";

import urlConfig from "servers/urlConfig";

export function getCityTableList(data) {
  return requestHttpGET({ data, url: urlConfig.city.city }).then(data => {
    return data
  }).catch(err => {
    message.error(err.message)
    return null
  });
}


export function addCityOpen(data) {
  return requestHttpPOST({ data, url: urlConfig.city.city_open }).then(data => {
    return data
  }).catch(err => {
    message.error(err.message)
    return null
  });
}
