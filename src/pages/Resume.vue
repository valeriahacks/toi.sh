<template>
  <div class="page">
    <h3>
      <odometer delay="0" speed="65">Working on it...</odometer>
    </h3>
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

  .page {
    h3 {
      font-size: 4rem;
      margin: 10px 0;
    }
  }
</style>
