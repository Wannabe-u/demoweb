import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import FindUser from '@/components/finduser/FindUser'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'FindUser',
      component: FindUser
    }
  ]
})
