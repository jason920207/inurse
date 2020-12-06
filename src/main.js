import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element-ui'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
// 引入 http.js 文件：封装axios
import './http'
Vue.use(Mint)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
