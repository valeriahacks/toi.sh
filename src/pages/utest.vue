<template>
  <div class="page home">
    <undulator/>
  </div>
</template>

<script>
  import Undulator from '../components/Undulator.vue'

  export default {
    components: { Undulator }
  }
</script>

<style lang="scss">
  .page {
    background: rgba(0,0,0,1)
  }
</style>
