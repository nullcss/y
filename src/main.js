// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import store from './store'

FastClick.attach(document.body)

Vue.config.productionTip = false

import myAPI from './server/API'
Vue.prototype.$API = myAPI

import axios from 'axios'
Vue.prototype.$http = axios

import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app-box')