<template>
  <div class="page">
    <div class="center">
      <h1><odometer speed="50" delay="1000" backup="true">Hey Rob!</odometer></h1>
      <h3>Graham Pegg (N01180081), Humber Lakeshore Campus, Computer Applications</h3>
      <p>
        Been trying to come up with an idea of what to do with this domain... Meh?
      </p>
    </div>
  </div>
</template>

<script>
  import Odometer from '../components/Odometer.vue'

  export default {
    components: { Odometer }
  }
</script>

<style>
* {
  font-family: Arial, sans-serif;
  color: #232323;
  text-align: center;
  box-sizing: border-box;
}

body {
  background: #efefef;
  height: 100vh;
  margin: 0;
}

.center {
  flex: 1 1 100%;
  padding: 0 30px;
}

.page {
  width: 100vw;
  max-width: 970px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100vh;
}

h1 {
  font-size: 3rem;
}
</style>
