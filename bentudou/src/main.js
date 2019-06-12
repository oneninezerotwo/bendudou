import Vue from 'vue'
import App from './App.vue'


//引入路由  然后把路由全局
import router from './router'
import axios from 'axios'
//引入外部的ui库
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'weui'
<<<<<<< HEAD
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Search,Swipe, SwipeItem} from 'mint-ui'
import {Card } from 'vant';

Vue.use(MintUI).use(Search).use(Swipe).use(SwipeItem).use(Vant).use(Card)
=======
import 'Vant' 

import 'vant/lib/index.css';

import { Search,Swipe, SwipeItem} from 'mint-ui'

Vue.use(MintUI).use(Search).use(Swipe).use(SwipeItem)

import { CouponCell, CouponList } from 'vant';

Vue.use(CouponCell).use(CouponList);
>>>>>>> Heyvens

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
<<<<<<< HEAD
  store,
=======
>>>>>>> Heyvens
  router,
  render: h => h(App),
}).$mount('#app')
