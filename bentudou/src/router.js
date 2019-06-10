import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import Thome from './view/Thome'


//二级路由
import Thomes from './components/Thomes'
import Tclsify from './components/Tclsify'
import Tcar from './components/Tcar'
import Tmine from './components/Tmine'

const router = new VueRouter({
    routes: [
        //从定向
        { path: '/', redirect: 'Thomes' },
      { path: '/',
        component: Thome,
        children: [
          {
            // 当 /user/:id/profile 匹配成功，
            // UserProfile 会被渲染在 User 的 <router-view> 中
            path: 'Thomes',
            component: Thomes,
            name:'Thomes'
          },
          {
            path: 'Tclsify',
            component: Tclsify,
            name:'Tclsify'
          },
          {
        
            path: 'Tcar',
            component: Tcar,
            name:'Tcar'
          },
          {
      
            path: 'Tmine',
            component: Tmine,
            name:'Tmine'
          }
        ]
      }
    
    ]
  })

  export default router