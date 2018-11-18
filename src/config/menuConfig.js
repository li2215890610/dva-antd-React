const menuList = [
  {
      "title": '首页',
      "icon": 'home',
      "key": '/home',
  },
  {
      "title": 'UI',
      "key": '/ui',
      "icon": 'appstore',
      "children": [
          {
              "title": '按钮',
              "key": '/ui/buttons',
          },
          {
              "title": '弹框',
              "key": '/ui/modals',
          },
          {
              "title": 'Loading',
              "key": '/ui/loadings',
          },
          {
              "title": '通知提醒',
              "key": '/ui/notifications',
          },
          {
              "title": '全局Message',
              "key": '/ui/messages',
          },
          {
              "title": 'Tab页签',
              "key": '/ui/tabs',
          }
      ]
  },
  {
      "title": '表单',
      "key": '/form',
      "icon": 'form',
      "children": [
          {
              "title": '登录',
              "key": '/form/login',
          },
          {
              "title": '注册',
              "key": '/form/reg',
          }
      ]
  },
  {
      "title": '表格',
      "key": '/table',
      "icon": 'table',
      "children": [
          {
              "title": '综合表格',
              "key": '/table/basic',
          },
          {
            "title": '动态表格',
            "key": '/table/dynamic',
        }
      ]
  },
  {
      "title": '城市管理',
      "icon": 'flag',
      "key": '/city'
  },
  {
      "title": '订单管理',
      "key": '/order',
      "icon": 'file-add',
      "children": [
          {
              "title": '订单详情',
              "key": '/order/detail'
          }
      ]
  },
  {
      "title": '员工管理',
      "icon": 'usergroup-add',
      "key": '/user'
  },
  {
      "title": '车辆地图',
      "icon": 'environment',
      "key": '/bikeMap'
  },
  {
      "title": '权限设置',
      "icon": 'codepen',
      "key": '/permission'
  },
  {
      "title":"生命周期",
      "icon":"radius-setting",
      "key":"/component",
  }
];


export default menuList;