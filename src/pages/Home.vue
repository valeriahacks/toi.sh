<template>
  <div class="page">
    <math></math>
  </div>
</template>

<script>
  import Math from '../components/Math.vue'

  export default {
    components: { Math }
  }
</script>

<style lang="scss">
  @import '../sass/sass-only/app';

  .page {
    color: $warmgrey;
  }
</style>
