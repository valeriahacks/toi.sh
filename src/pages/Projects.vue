<template>
  <div class="page">
    <h3>
      <odometer delay="0" speed="65">Projects</odometer>
    </h3>
    <div v-html="require('../assets/svg/unfuck.svg')"></div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  </div>
</template>

<script>
  import Odometer from '../components/Odometer.vue'

  export default {
    components: { Odometer }
  }
</script>

<style lang="scss">
  @import '../sass/sass-only/app';

  svg {
    width: 200px;
  }
</style>
