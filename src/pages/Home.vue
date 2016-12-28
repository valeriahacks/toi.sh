<template>
  <div class="page">
    <div class="greeting">
      <h2><odometer>Hi!</odometer></h2>
    </div>
    <math></math>
  </div>
</template>

<script>
  import Math from '../components/Math.vue'
  import Odometer from '../components/Odometer.vue'

  export default {
    components: { Math, Odometer }
  }
</script>

<style lang="scss">
  @import '../sass/sass-only/app';

  .greeting {
    h2 {
      font-family: $reg;
      font-weight: bold;
      font-size: 5rem;
    }
  }
</style>
