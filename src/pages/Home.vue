<template>
  <div class="page">
    <div class="greeting">
      <h2>
        <odometer delay="700" speed="95">Hello!</odometer>
      </h2>
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
    display: inline-block;
    font-family: $reg;
    background: rgba(255,255,255,0.6);
    box-shadow: 0 6px 30px rgba(45,45,45,0.15);
    padding: 30px;
    margin-top: 30px;

    h2,
    p {
      margin: 0;
    }

    h2 {
      font-weight: 700;
      font-size: 6.5rem;
      line-height: 6.5rem;
    }

    p {
      font-size: 3rem;
      font-weight: 600;
      margin-top: -19px;

      em {
        font-style: normal;
        color: $purple;
      }
    }
  }
</style>
