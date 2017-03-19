<template>
  <div class="scroller">
    <div
      v-for="word in words"
      :class="'word ' + getWordClass(word)"
      @click="(getWordAction(word))">
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
        return this.words.length
      },
      currentWord () {
        return this.words[this.i]
      },
      nextInWord () {
        return this.words[(this.i + 2) % this.max]
      },
      nextWord () {
        return this.words[(this.i + 1) % this.max]
      },
      prevWord () {
        return this.words[((this.i - 1 % this.max) + this.max) % this.max]
      },
      prevOutWord () {
        return this.words[((this.i - 2 % this.max) + this.max) % this.max]
      }
    },
    methods: {
      getWordClass (word) {
        if (word === this.currentWord) return 'centre'
        if (word === this.nextWord) return 'top'
        if (word === this.prevWord) return 'bottom'
        if (word === this.nextInWord) return 'top-in'
        if (word === this.prevOutWord) return 'bottom-out'
        return ''
      },
      getWordAction (word) {
        if (word === this.currentWord) return this.next
        if (word === this.nextWord) return this.next
        if (word === this.prevWord) return this.prev
        return () => {}
      },
      next () {
        this.i = (this.i + 1) % this.max
      },
      prev () {
        this.i = ((this.i - 1 % this.max) + this.max) % this.max
      }
    }
  }
</script>

<style lang="scss">
  .scroller {
    display: inline-block;
    position: relative;
    height: 30px;

    .word {
      position: absolute;
      top: 0;
      left: 0;
      user-select: none;
      cursor: pointer;
      transform: perspective(500px) translateY(-125%) rotateX(90deg);
      opacity: 0;
      transition: 0.5s transform ease, 1s opacity ease;

      &.top-in {
        transform: perspective(900px) translateY(-130%) rotateX(90deg);
        opacity: 1;
      }

      &.top {
        transform: perspective(900px) translateY(-100%) rotateX(45deg);
        opacity: 1;
      }

      &.centre {
        transform: perspective(900px) translateY(0) rotateX(0deg);
        opacity: 1;
      }

      &.bottom {
        transform: perspective(900px) translateY(100%) rotateX(-45deg);
        opacity: 1;
      }

      &.bottom-out {
        transform: perspective(900px) translateY(130%) rotateX(-90deg);
        opacity: 1;
      }
    }
  }
</style>
