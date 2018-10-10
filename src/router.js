import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login/Login.vue'
import WaitJoin from './views/WaitJoin/WaitJoin.vue'
import NotFound from './views/NotFound/NotFound.vue'

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
      path: '/*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
