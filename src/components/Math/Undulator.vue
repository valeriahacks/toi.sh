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

  const FIRST = Symbol('first')
  const SECOND = Symbol('second')
  const SECONDLAST = Symbol('secondlast')
  const LAST = Symbol('last')

  export default {
    data () {
      return {
        frame: 0,
        windowWidth: 0,
        config: {
          width: 24,
          max: 5,
          bodyBorder: 24,
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
        out.push(this.getValidNumber(0, FIRST))
        out.push(this.getValidNumber(out.slice(-1)[0], SECOND))
        for (let i = 2; i < this.canFit - 2; i++) {
          out.push(this.getValidNumber(out.slice(-1)[0]))
        }
        out.push(this.getValidNumber(out.slice(-1)[0], SECONDLAST))
        out.push(this.getValidNumber(out.slice(-1)[0], LAST))

        return out
      },
      lines () {
        return this.stream.map(this.determineLine)
      },
      containerCSS () {
        let out = 'max-height: ' + (((this.config.max + 1) * this.config.width) + (this.config.animation.strength * 2)) + 'px;'
        out += 'left: ' + this.config.bodyBorder + 'px;'
        out += 'width: calc(100% - ' + (this.config.bodyBorder * 2) + 'px);'
        return out
      },
      widthRatio () {
        return this.config.width / 18
      }
    },
    methods: {
      getValidNumber (last, flag) {
        var out = Math.floor(Math.random() * this.config.max)

        if (flag === undefined) {
          if (out === last) return this.getValidNumber(last)
          return out
        } else {
          switch (flag) {
            case FIRST:
              // First number can't be the maximum size, so second number can be larger
              return Math.floor(Math.random() * (this.config.max - 1))
            case SECOND:
              // Second number must be larger than first
              if (out <= last) return this.getValidNumber(last, SECOND)
              return out
            case SECONDLAST:
              // Second last number can't be zero, so last can be less than second last
              if (this.config.max - 1 === last) return this.config.max - 2
              return this.config.max - 1
            case LAST:
              // Last number must be smaller than second last
              if (out >= last) return last - 1
              return out
          }
        }
      },
      scale () {
        this.windowWidth = (window.innerWidth - (this.config.bodyBorder * 2))
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
        if (key === 0) return this.makeLine(number, tops.pit)

        // If last line
        if (key >= stream.length - 1) return this.makeLine(number, tops.pit)

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

        console.warn('ahh', key, stream[key - 1], number)
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
