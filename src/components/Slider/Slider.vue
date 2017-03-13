<template>
  <div class="slider">
    <div class="btn" @click="next">HEYYYY</div>
    <div class="slides">
      <slot></slot>
    </div>

    <math
      :gradient-from="(current ? current.gradientFrom : '')"
      :gradient-to="(current ? current.gradientTo : '')" />
    </div>
  </div>
</template>

<script>
  import Math from '../../components/Math.vue'

  export default {
    props: {},
    data () {
      return {
        i: 0,
        slides: []
      }
    },
    computed: {
      current () {
        return this.slides[this.i]
      }
    },
    methods: {
      add (slide) {
        this.slides.push(slide)
      },
      next () {
        this.current.hide('right')
        this.i = (this.i + 1) % this.slides.length
        this.current.show('left')
      },
      prev () {
        this.current.hide('left')
        this.i = Math.abs((this.i - 1) % this.slides.length)
        this.current.show('right')
      }
    },
    mounted () {
      this.current.show()
    },
    components: { Math }
  }
</script>

<style lang="scss">
  .slider {
    .btn {
      position: fixed;
      top: 10px;
      right: 10px;
      z-index: 99999999;
      background: red;
      padding: 30px;
    }
    .slides {
      position: absolute;
      overflow: hidden;
      left: 0;
      top: 128px;
      height: calc(100vh - 128px);
      width: 100vw;
    }
  }
</style>
