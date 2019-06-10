import Vue from 'vue'
import App from './App.vue'


//引入路由  然后把路由全局
import router from './router'
import axios from 'axios'
//引入外部的ui库
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'weui'

import { Search,Swipe, SwipeItem} from 'mint-ui'

Vue.use(MintUI).use(Search).use(Swipe).use(SwipeItem)

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
