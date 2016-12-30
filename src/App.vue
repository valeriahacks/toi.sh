<template>
  <div id="app">
    <header :class="($route.name === 'home' ? 'home' : 'interior')"
            :style="headerHeight">
      <div class="logo">
        <router-link to="/" v-html="require('./assets/svg/logo.svg')">
          <!-- SVG file injected here by webpack -->
        </router-link>
      </div>
      <nav>
        <router-link to="/">
          Home
        </router-link>
        <router-link to="resume">
          Resumé
        </router-link>
        <router-link to="projects">
          Projects
        </router-link>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        scroll: window.pageYOffset || document.documentElement.scrollTop
      }
    },
    computed: {
      headerHeight () {
        let scaler = 1 - (this.scroll / 100)
        let scaled = ((scaler > 1 ? 1 : scaler) * 50) + 70
        return 'height:' + scaled + 'px'
      }
    },
    methods: {
      updateScroll () {
        this.scroll = window.pageYOffset || document.documentElement.scrollTop
      }
    },
    mounted () {
      window.addEventListener('scroll', this.updateScroll.bind(this))
    }
  }
</script>

<style lang="scss">
  @import './sass/main.scss';
</style>
