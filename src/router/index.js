import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Member from '@/components/Member/Member'
import Community from '@/components/Community/Community'
import GoodsPrice from '@/components/GoodsPrice/GoodsPrice'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        keepAlive: false // 不需要缓存
      }
    },
    {
      path: '/member',
      name: 'member',
      component: Member,
      meta: {
        keepAlive: false // 不需要缓存
      }
    },
    {
      path: '/community',
      name: 'Community',
      component: Community
    },
    {
      path: '/goodsPrice',
      name: 'goodsPrice',
      component: GoodsPrice
    }
  ]
})
