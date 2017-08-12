<template>
  <div id="app">
    <header :class="($route.name === 'home' ? 'home' : 'interior')">
      <div class="logo">
        <router-link to="/" v-html="require('./assets/svg/logo.svg')">
          <!-- SVG file injected here by webpack -->
        </router-link>
      </div>
      <nav>
        <a href="http://github.com/toish">
          Portfolio
        </a>
      </nav>

      <undulator
        v-if="$route.name !== 'home'"
        style="top: 115px; z-index: -1; max-height: 110px; height: 110px;"
        colour="#9525a8"
        :flip="true"
        :max="3"
        :width="19" />

    </header>
    <router-view/>
  </div>
</template>

<script>
  import Undulator from './components/Math/Undulator.vue'

  export default {
    components: { Undulator }
  }
</script>

<style lang="scss">
  @import './sass/main.scss';
</style>
