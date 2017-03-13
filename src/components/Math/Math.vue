<template>
  <div class="math">
    <canvas
      :id="id"
      :width="window.width"
      :height="window.height"
      :style="canvasStyle">
    </canvas>
    <undulator />
    <div class="label">
      #{{ equation }}
    </div>
  </div>
</template>

<script>
// Eqution Hashmap
import equations from '../../js/equations.js'

// Components
import Undulator from './Undulator.vue'

export default {
  props: {
    pixelSize: {
      default: 7
    },
    detail: {
      default: 1
    },
    frameRate: {
      default: 150
    },
    contrast: {
      default: 0.4
    },
    equation: {
      default: Math.floor(Math.random() * (equations.length - 1))
    },
    extraEquations: {
      default: () => []
    }
  },
  data () {
    return {
      id: 'c-' + (new Date()).getTime(),
      interval: null,
      frame: 0,
      window: {
        height: 0,
        width: 0
      }
    }
  },
  computed: {
    // Set opacity based on colour depth
    canvasStyle () {
      return 'opacity:' + this.contrast / 6
    },

    // Canvas objects
    canvas () {
      return document.querySelector('canvas#' + this.id)
    },
    ctx () {
      return (this.canvas ? this.canvas.getContext('2d') : null)
    },

    // Calculated states the the drawFrame() function needs
    rows () {
      return (this.window.width / this.pixelSize) * this.detail
    },
    columns () {
      return (this.window.height / this.pixelSize) * this.detail
    },
    increment () {
      return 1 / this.detail
    },

    // Concatinate normal equation list with custom equations from prop
    equations () {
      return equations.concat(this.extraEquations)
    }
  },
  methods: {
    // Calculate the result of the current function at pixel (x,y) at frame n
    calculate (x, y, n) {
      return this.equations[this.equation](x, y, n)
    },

    // Adjust the size of the canvas element
    // (this.window.* are bound to the height and width properties
    // of the canvas element)
    scale () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight + 30
    },

    // Scale v over max to v over contrast, then mod against max incase v > max
    bound (v, max) {
      return Math.floor(((v / max) * (this.contrast * max)) + (max - (this.contrast * max))) % max
    },

    // Return the color representing value v
    cellColour (v) {
      let boundedValue = this.bound(v, 255)
      return 'rgb(' + boundedValue + ', ' + boundedValue + ', ' + boundedValue + ')'
    },

    // Draw the next or first frame to the canvas
    drawFrame () {
      for (let x = 0; x < this.rows; x += this.increment) {
        for (let y = 0; y < this.columns; y += this.increment) {
          let result = this.calculate(x, y, this.frame)
          this.ctx.fillStyle = this.cellColour(result)
          this.ctx.fillRect(x * this.pixelSize, y * this.pixelSize, this.pixelSize, this.pixelSize)
        }
      }
      this.frame += 1
    }
  },
  mounted () {
    this.interval = setInterval(this.drawFrame.bind(this), this.frameRate)
    this.scale()
    window.addEventListener('resize', this.scale.bind(this))
  },
  destroyed () {
    clearInterval(this.interval)
    window.onscroll = null
  },
  components: { Undulator }
}
</script>

<style lang="scss">
  @import '../../sass/sass-only/_app.scss';

  .math {
    position: absolute;
    top: 0;
    left: 0;
    height: calc(100vh + 30px);
    width: 100vw;
    z-index: -2;

    &::after {
      content: "";
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 1;
      background: linear-gradient(45deg, $luke1, $luke3);
      mix-blend-mode: multiply;

      @supports not (mix-blend-mode: multiply) {
        opacity: 0.2;
      }
    }

    canvas {
      position: absolute;
      z-index: 0;
    }

    .label {
      position: fixed;
      bottom: 8px;
      right: 8px;
      font-size: 0.5rem;
      z-index: 1;
      color: #909090;
    }
  }
</style>
