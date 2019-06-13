import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import Thome from './view/Thome'

import Tlogin from './view/Tlogin'

//二级路由
import Thomes from './view/pages/Thomes'
import Tclsify from './view/pages/Tclsify'
import Tcar from './view/pages/Tcar'
import Tmine from './view/pages/Tmine'

import Tgoods from './components/list/Tgoods'
const router = new VueRouter({
  routes: [
    //从定向
    { path: '/', redirect: 'Thomes' },
    {
      path: '/',
      component: Thome,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'Thomes',
          component: Thomes,
          name: 'Thomes'
        },
        {
          path: 'Tclsify',
          component: Tclsify,
          name: 'Tclsify',
        },
        {
          path: 'Tcar',
          component: Tcar,
          name: 'Tcar'
        },
        {

          path: 'Tmine',
          component: Tmine,
          name: 'Tmine'
        },
        {
          name: 'Tgoods',
          component: Tgoods,
          path: '/Tgoods',
    
        }
      ]
    },
    {
      path: '/Tlogin',
      component: Tlogin,
      name: 'Tlogin'
    },
  ]
})

export default router




