import Vue from 'vue'
import App from './App.vue'


//引入路由  然后把路由全局
import router from './router'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
