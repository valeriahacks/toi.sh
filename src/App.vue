<template>
  <div id="app">
    <header>
      <div class="logo">
        <img src="./assets/logo.png" width="100" />
      </div>
      <nav>
        <router-link to="/">
          Home
        </router-link>
        <router-link to="resume" class="not-ready">
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
