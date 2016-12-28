<template>
  <div class="page">
    <div class="greeting">
      <h2><odometer>Hi!</odometer></h2>
      <p>My name’s <em>Toish.</em></p>
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
    font-family: $reg;

    h2,
    p {
      margin: 0;
    }

    h2 {
      font-weight: 700;
      font-size: 5rem;
      line-height: 5rem;
    }

    p {
      font-size: 3rem;
      font-weight: 600;

      em {
        font-style: normal;
        color: $purple;
      }
    }
  }
</style>
