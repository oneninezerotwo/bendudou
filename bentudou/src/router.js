import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import Thome from './view/Thome'

import Tlogin from './view/Tlogin'

//二级路由
import Thomes from './view/home/Thomes'
import Tclsify from './view/home/Tclsify'
import Tcar from './view/home/Tcar'
import Tmine from './view/home/Tmine'

// import Maternal  from './components/list/home/Maternal'

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




