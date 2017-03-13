<template>
  <div class="undulator" :style="containerCSS">
    <svg v-for="(line, key) in lines" :style="lineCSS(line, key)">
      <path
        :d="line.top"/>
      <rect
        x="0"
        y="17"
        width="18"
        height="500"/>
    </svg>
  </div>
</template>

<script>
  const tops = {
    spire: 'M0,18V9C0,4,4,0,9,0h0C14,0,18,4,18,9V18',
    pit: 'M0,18V0v0C0,5,4,9,9,9H9h0C14,9,18,5,18,0V0v18',
    falling: 'M0,18V0v0C0,5,4,9,9,9H9h0C14,9,18,13,18,18V18',
    rising: 'M18,18V0v0C18,5,14,9,9,9H9H9C4,9,0,13,0,18V18'
  }

  export default {
    data () {
      return {
        frame: 0,
        windowWidth: 0,
        config: {
          width: 25,
          max: 5,
          animation: {
            strength: 4,
            speed: 0.3
          }
        }
      }
    },
    computed: {
      canFit () {
        return Math.ceil(this.windowWidth / this.config.width)
      },
      stream () {
        let out = []
        for (let i = 0; i < this.canFit; i++) {
          out.push(this.getValidNumber(out.slice(-1)[0]))
        }
        return out
      },
      lines () {
        return this.stream.map(this.determineLine)
      },
      containerCSS () {
        let out = 'max-height: ' + (((this.config.max + 1) * this.config.width) + (this.config.animation.strength * 2)) + 'px;'
        return out
      },
      widthRatio () {
        return this.config.width / 18
      }
    },
    methods: {
      getValidNumber (last) {
        var out = Math.floor(Math.random() * this.config.max)
        if (out === last) return this.getValidNumber(last)
        return out
      },
      scale () {
        this.windowWidth = window.innerWidth
      },
      animationEffect (key) {
        return this.config.animation.strength * Math.sin((this.frame * this.config.animation.speed) + key)
      },
      lineCSS (line, key) {
        let top = line.height + this.animationEffect(key)
        let out = 'transform: translateY(' + top + 'px) scale(' + this.widthRatio + ');'
        out += 'width: ' + this.config.width + 'px'
        return out
      },
      makeLine (number, top) {
        return {
          height: (this.config.max - number) * this.config.width,
          top,
          number
        }
      },
      determineLine (number, key, stream) {
        // If first line
        if (key === 0) {
          if (stream[key + 1] < number) {
            return this.makeLine(number, tops.falling)
          }

          if (stream[key + 1] > number) {
            return this.makeLine(number, tops.rising)
          }
        }

        // If last line
        if (key >= stream.length - 1) {
          if (stream[key - 1] < number) {
            return this.makeLine(number, tops.rising)
          }

          if (stream[key - 1] > number) {
            return this.makeLine(number, tops.falling)
          }
        }

        // If line in the middle
        if ((stream[key - 1] > number) && (stream[key + 1] < number)) {
          return this.makeLine(number, tops.falling)
        }

        if ((stream[key - 1] > number) && (stream[key + 1] > number)) {
          return this.makeLine(number, tops.pit)
        }

        if ((stream[key - 1] < number) && (stream[key + 1] > number)) {
          return this.makeLine(number, tops.rising)
        }

        if ((stream[key - 1] < number) && (stream[key + 1] < number)) {
          return this.makeLine(number, tops.spire)
        }
      }
    },
    mounted () {
      setInterval(() => this.frame++, 100)

      this.scale()
      window.addEventListener('resize', this.scale.bind(this))
    }
  }
</script>

<style lang="scss">
  .undulator {
    position: absolute;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    z-index: 99999999999;
    overflow: hidden;
    display: flex;

    svg {
      display: block;
      position: relative;
      top: 0;
      height: 500px;
      transform-origin: top left;
      transform: translateY(0) scale(1);

      rect,
      path {
        fill: #FFF;
      }
    }
  }
</style>
