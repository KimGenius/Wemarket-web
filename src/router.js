import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login/Login.vue'
import WaitJoin from './views/WaitJoin/WaitJoin.vue'
import NotFound from './views/NotFound/NotFound.vue'
import Seller from './views/Seller/Seller.vue'
import Customer from './views/Customer/customer.vue'
import MoneyComplete from './views/MoneyComplete/moneyComplete.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/waitjoin',
      name: 'WaitJoin',
      component: WaitJoin
    },
    {
      path: '/seller',
      name: 'Seller',
      component: Seller
    },
    {
      path: '/customer',
      name: 'Customer',
      component: Customer
    },
    {
      path: '/money',
      name: 'MoneyComplete',
      component: MoneyComplete
    },
    // 전체 적용이라 404는 맨 뒤로
    {
      path: '/*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
