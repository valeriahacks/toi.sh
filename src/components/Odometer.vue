<template>
  <div class="odometer">
    <span v-for="word in chars" class="word">
      <span v-for="char in word" :class="'mask' + (time > char.index ? ' active' : '')">
        <span class="character" :aria-hidden="backup" :style="speedAdjustment">{{ char.char }}</span>
      </span>
    </span>
    <div class="backup" style="display: none;" v-if="backup">{{ content }}</div>
  </div>
</template>

<script>
  export default {
    props: ['trigger', 'delay', 'speed', 'backup'],
    data () {
      return {
        chars: [],
        time: 0,
        id: null,
        content: ''
      }
    },
    computed: {
      speedAdjustment () {
        if (this.speed) {
          return 'transition-duration: ' + (parseInt(this.speed) * 20) + 'ms;'
        } else {
          return ''
        }
      }
    },
    mounted () {
      // Store origional text, just in case we need it.
      this.content = this.$slots.default[0].text

      // Remove tabs and newlines.
      var chars = this.$slots.default[0].text.split('').filter((x) => !((x === '\t') || (x === '\n'))).join('')

      // Put all characters into an array, divided into words. (2 dimensional)
      // Track index position because Vue 2 removed `$index` for the `v-for` directive. *grumble grumble*
      var i = 0
      this.chars = chars.split(' ').map((word) => word.split('').map((x) => ({ char: x, index: i++ })))

      if (this.trigger) {
        this.$watch(this.trigger, (show) => {
          if (this.id) {
            clearInterval(this.id)
            this.time = 0
          }
          if (!show) {
            this.time = 0
          } else {
            setTimeout(() => { this.id = setInterval(() => this.time++, (parseInt(this.speed) || 75)) }, (parseInt(this.delay) || 1000))
          }
        })
      } else {
        setTimeout(() => {
          this.id = setInterval(() => this.time++, 75)
        }, 500)
      }
    }
  }
</script>

<style lang="scss">
  .odometer {
    >span {
      display: inline-block;

      &:not(:last-of-type)::after {
        content: "\00a0";
      }

      >span {
        overflow: hidden;
        display: inline-block;
        padding-bottom: 10px;

        >span {
          display: inline-block;
          transform: translateY(-100%);
          transition: 1s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        &.active {
          >span {
            transform: translateY(0);
          }
        }
      }
    }
  }
</style>
