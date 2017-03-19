<template>
  <div class="scroller">
    <div
      v-for="word in words"
      :class="'word ' + getWordClass(word)"
      @click="doWordAction(word)">
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
      doWordAction (word) {
        if (word === this.nextWord) this.next()
        if (word === this.prevWord) this.prev()
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
  @import '../sass/sass-only/app';

  .scroller {
    display: inline-block;
    position: relative;
    height: 30px;
    min-width: 230px;
    transform: translateY(7px);

    .word {
      line-height: 27px;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      user-select: none;
      cursor: pointer;
      transform: perspective(500px) translateY(-125%) rotateX(90deg);
      opacity: 0;
      transition: 0.5s transform $expo, 0.5s opacity $expo;

      &.top-in {
        transform: perspective(900px) translateY(-130%) rotateX(90deg);
        opacity: 0;
      }

      &.top {
        transform: perspective(900px) translateY(-100%) rotateX(45deg);
        opacity: 0.65;
      }

      &.centre {
        transform: perspective(900px) translateY(0) rotateX(0deg);
        opacity: 1;
      }

      &.bottom {
        transform: perspective(900px) translateY(100%) rotateX(-45deg);
        opacity: 0.65;
      }

      &.bottom-out {
        transform: perspective(900px) translateY(130%) rotateX(-90deg);
        opacity: 0;
      }
    }
  }
</style>
