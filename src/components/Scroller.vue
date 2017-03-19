<template>
  <div class="scroller">
    <div class="word" v-for="word in words">
      {{ word }}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      words: {
        required: true,
        type: Array
      }
    },
    data () {
      return {
        i: 0
      }
    },
    computed: {
      max () {
        return this.word.length
      },
      currentWord () {
        return this.words[this.i]
      },
      nextWord () {
        return this.words[(this.i + 1) % this.max]
      },
      prevWord () {
        return this.words[((this.i % this.max) + this.max) % this.max]
      }
    }
  }
</script>

<style lang="scss">
  .scroller {
    display: inline-block;
    position: relative;

    .word {
      position: absolute;
      top: 0;
      left: 0;
      transform: perspective(500px) translateX(-125%) rotateX(90deg);
      transition: 0.5s transform ease;

      &.top {
        transform: perspective(500px) translateX(-100%) rotateX(45deg);
      }

      &.centre {
        transform: perspective(500px) translateX(0) rotateX(0deg);
      }

      &.bottom {
        transform: perspective(500px) translateX(100%) rotateX(-45deg);
      }
    }
  }
</style>
