<template>
  <div id="app">
    <header :class="($route.name === 'home' ? 'home' : 'interior')">
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

<style lang="scss">
  @import './sass/main.scss';
</style>
