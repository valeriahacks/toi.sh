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
  data: {
    masthead: {
      height: 0,
      width: 0
    }
  },
  methods: {
    scale () {
      this.masthead.width = window.innerWidth
      this.masthead.height = document.querySelector('.page.home .greeting').offsetHeight + 380
    }
  },
  mounted () {
    this.scale()
    window.addEventListener('resize', this.scale)
  },
  router
})
