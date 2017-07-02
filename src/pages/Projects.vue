<template>
  <div class="page">
    <h3>My Projects</h3>
    <div class="projects">

      <div class="project">
        <div class="icon" v-html="require('../assets/svg/unfuck.svg')"></div>
        <h4>Chromatism</h4>
        <p>Lorem ipsum dolar sit amet</p>
      </div>

      <div class="project">
        <div class="icon" v-html="require('../assets/svg/unfuck.svg')"></div>
        <h4>Unfuck</h4>
        <p>Lorem ipsum dolar sit amet</p>
      </div>

    </div>
  </div>
</template>

<script>
  import Odometer from '../components/Odometer.vue'

  export default {
    components: { Odometer }
  }
</script>

<style lang="scss" scoped>
  @import '../sass/sass-only/app';

  .page { display: block; }

  .projects {
    display: flex;

    .project {
      flex: 1 1 200px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 30px;
      position: relative;
      color: #888;

      h4 {
        flex: 0 1 150px;
        padding: 15px 0;
        margin: 0;
        font-size: 2rem;
        text-align: center;
      }

      p {
        flex: 1 1 200px;
      }

      .icon {
        width: 100%;
        max-width: 90px;
      }
    }
  }
</style>
