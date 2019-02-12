// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'
import './assets/css/global.css'
import Mint from 'mint-ui'
import axios from 'axios'
import store from './store/index'//引入store

import HeaderItem from '@/components/common/HeaderItem';

Vue.use(Mint)
Vue.prototype.axios = axios
Vue.config.productionTip = false
Vue.component('header-item',HeaderItem)

Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
  // 聚焦元素
    el.focus()
    }
  })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
