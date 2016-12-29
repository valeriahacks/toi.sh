<template>
  <div id="app">
    <header :class="($route.name === 'home' ? 'home' : 'interior')">
      <div class="logo">
        <img src="./assets/logo.png" />
      </div>
      <nav>
        <router-link to="/">
          Home
        </router-link>
        <router-link to="resume">
          Resumé
        </router-link>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import './sass/main.scss';
</style>
