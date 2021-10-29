import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 导入element-ui
import Element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"

Vue.use(Element)
import global from './globalFun'

import axios from './axios'

Vue.prototype.$axios = axios //

// require("./mock") //引入mock数据，关闭则注释该行
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
