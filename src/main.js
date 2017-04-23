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
let vm = new Vue({
  name: 'root',
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
      Vue.nextTick(() => {
        this.masthead.width = window.innerWidth
        if (this.$route.name === 'home') {
          this.masthead.height = document.querySelector('.page.home .greeting').offsetHeight + 380
        } else if (this.$route.name === 'math-test') {
          this.masthead.height = 600
        } else {
          return 0
        }
      })
    }
  },
  mounted () {
    this.scale()

    Vue.nextTick(() => {
      window.addEventListener('resize', this.scale)
    })
  },
  router
})

router.afterEach((to, from) => {
  vm.scale()
})
