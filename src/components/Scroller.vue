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
  const UP = Symbol('up')
  const DOWN = Symbol('down')

  export default {
    props: {
      words: {
        required: true,
        type: Array
      }
    },
    data () {
      return {
        i: 0,
        direction: UP
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
      getLengthClass (word) {
        if (word.length <= 7) return 'short'
        if (word.length > 7 && word.length <= 10) return 'medium'
        if (word.length > 10) return 'long'
      },
      getWordClass (word) {
        if (word === this.currentWord) return this.getLengthClass(word) + ' centre'
        if (word === this.nextWord) return this.getLengthClass(word) + ' top'
        if (word === this.prevWord) return this.getLengthClass(word) + ' bottom'
        if (word === this.nextInWord) return this.getLengthClass(word) + ' top-in'
        if (word === this.prevOutWord) return this.getLengthClass(word) + ' bottom-out'
        return this.getLengthClass(word)
      },
      doWordAction (word) {
        if (word === this.nextWord) this.next()
        if (word === this.prevWord) this.prev()
      },
      next () {
        this.i = (this.i + 1) % this.max
        this.direction = DOWN
        this.resetTimer()
      },
      prev () {
        this.i = ((this.i - 1 % this.max) + this.max) % this.max
        this.direction = UP
        this.resetTimer()
      },
      setTimer () {
        this.timer = setInterval(() => {
          if (this.direction === DOWN) this.next()
          if (this.direction === UP) this.prev()
        }, 2000)
      },
      resetTimer () {
        clearInterval(this.timer)
        this.setTimer()
      }
    },
    mounted () {
      // this.setTimer()
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
      padding: 0 6px;
      border-bottom: 1px solid rgba($luke1, 0);
      transform: perspective(500px) translateY(-125%) rotateX(90deg);
      opacity: 0;
      transition: all 0.5s $expo;

      &.top-in {
        transform: perspective(900px) translateY(-130%) rotateX(90deg);
        border-color: rgba($luke1, 0);
        opacity: 0;
      }

      &.top {
        transform: perspective(900px) translateY(-100%) rotateX(45deg);
        border-color: rgba($luke1, 0);
        opacity: 0.65;
      }

      &.centre {
        transform: perspective(900px) translateY(0) rotateX(0deg);
        border-color: rgba($luke1, 0.75);
        opacity: 1;
      }

      &.bottom {
        transform: perspective(900px) translateY(110%) rotateX(-45deg);
        border-color: rgba($luke1, 0);
        opacity: 0.65;
      }

      &.bottom-out {
        transform: perspective(900px) translateY(140%) rotateX(-90deg);
        border-color: rgba($luke1, 0);
        opacity: 0;
      }

      @media screen and (max-width: 807px) {
        width: 100%;
        text-align: center;
      }
    }
  }
</style>
