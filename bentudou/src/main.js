import Vue from 'vue'
import App from './App.vue'


//引入路由  然后把路由全局
import router from './router'
import axios from 'axios'
//引入外部的ui库
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'weui'
import store from './store'
import 'Vant'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Search,Swipe, SwipeItem } from 'mint-ui'

import { CouponCell, CouponList,Card} from 'vant';

Vue.use(MintUI).use(Search).use(Swipe).use(SwipeItem).use(Vant).use(Card).use(SwipeItem).use(CouponCell).use(CouponList).use(Search.name)
//cookie的增删取
import {setCookie,getCookie,delCookie} from './tcookie'
Vue.prototype.$tcookie = {
  setCookie,
  getCookie,
  delCookie
}
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
