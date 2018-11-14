import { requestHttpGET } from 'servers/request';

import { message } from "antd";

import urlConfig from "servers/urlConfig";

export function getDynamicTable(data) {
  return requestHttpGET({ data, url: urlConfig.table.list }).then(data => {
    return data
  }).catch(err => {
    message.error(err.message)
    return null
  });
}