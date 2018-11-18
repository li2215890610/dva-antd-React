import { notification, message } from "antd";

export function notificationMessage(type
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

export function Messages(type,content,duration) {
  message[type](
    content || '通知',
    duration || 3,
  )
}