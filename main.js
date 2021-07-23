import Vue from 'vue'
import App from './App'
//按需导入 $http 对象
import { $http } from '@escook/request-miniprogram'


uni.$http = $http
// 配置请求根路径
$http.baseUrl = 'https://www.uinav.com'

// 请求开始之前做一些事情
$http.beforeRequest = function (options) {
  // do somethimg...
  uni.showLoading({
  	title:'加载数据中...'
  })
}

// 请求完成之后做一些事情
$http.afterRequest = function () {
  // do something...
  uni.hideLoading()
}
Vue.config.productionTip = false

// 封装的展示消息提示的方法
uni.$showMsg = function (title = '数据加载失败！', duration = 1500) {
  uni.showToast({
    title,
    duration,
    icon: 'none',
  })
}

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
