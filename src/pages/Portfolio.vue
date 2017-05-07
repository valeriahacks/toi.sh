<template>
  <div class="page">
    <h3>
      <odometer delay="0" speed="65">Working on it...</odometer>
    </h3>
  </div>
</template>

<script>
  import Odometer from '../components/Odometer.vue'
  import Undulator from '../components/Math/Undulator.vue'

  export default {
    components: { Odometer, Undulator }
  }
</script>

<style lang="scss">
  @import '../sass/sass-only/app';
</style>
