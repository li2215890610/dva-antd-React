import { notification, message } from "antd";

function notificationMessage(type
  ,data,cb) {
  notification[type]({
    placement: data.placement || 'topRight',
    message: data.message || '通知',
    key: data.key,
    description: data.description || "...",
    onClose(){
      cb()
    }
  })
}

function Messages(type,content,duration) {
  message[type](
    content || '通知',
    duration || 3,
  )
}

export default {
  notificationMessage:notificationMessage,
  Messages:Messages
}