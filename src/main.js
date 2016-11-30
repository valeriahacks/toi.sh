/**
 * Import modules
 */

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

/**
 * Load routes
 */

import routes from './routes'
const router = new VueRouter({
  routes
})

/**
 * Register root component and start app
 */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
