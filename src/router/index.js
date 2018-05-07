import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Alarm from '@/components/Alarm'
// import HelloWorld from '@/components/Help'
import Inw from '@/components/Inw'
import Outw from '@/components/Outw'
import Statistic from '@/components/Statistic'
 import User from '@/components/User'
 import Login from '@/components/Login'
 import WM from '@/components/WM'
 import User1 from '@/components/User1'
 import Nav1 from '@/components/wm/Nav1.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Inw',
      name: 'Inw',
      component: Inw
     },
    {
      path: '/Outw',
      name: 'Outw',
      component: Outw
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/WM',
      name: 'WM',
      component: WM
    },
    {
      path: '/Nav1',
      name: 'Nav1',
      component: Nav1
    },
    {
      path: '/User1',
      name: 'User1',
      component: User1
    },

    {
      path: '/Alarm',
      name: 'Alarm',
      component: Alarm
    },
    {
      path: '/Statistic',
      name: 'Statistic',
      component: Statistic
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
  ],
  mode:"history"
})
