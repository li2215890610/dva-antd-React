import { requestHttpGET } from 'servers/request';

import { message } from "antd";

import urlConfig from "servers/urlConfig";

export function getOrderList(data) {
  return requestHttpGET({ data, url: urlConfig.order.open_city }).then(data => {
    return data
  }).catch(err => {
    message.error(err.message)
    return null
  });
}
