<template>
  <div class="math" :style="'height: ' + masthead.height + 'px'">
    <canvas
      :id="id"
      :width="masthead.width"
      :height="masthead.height"
      :style="canvasStyle">
    </canvas>
    <undulator v-if="!clean" colour="#F9F9F9" />
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
      default: 10
    },
    detail: {
      default: 1
    },
    frameRate: {
      default: 6
    },
    contrast: {
      default: 0.5
    },
    equation: {
      default: Math.floor(Math.random() * (equations.length - 1))
    },
    extraEquations: {
      default: () => []
    },
    clean: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      id: 'c-' + (new Date()).getTime(),
      realFrame: 0,
      frame: 0,
      masthead: this.$root.masthead
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

    // Calculated states that the drawFrame() function needs
    rows () {
      return (this.masthead.width / this.pixelSize) * this.detail
    },
    columns () {
      return (this.masthead.height / this.pixelSize) * this.detail
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
      if (this.equations[this.equation]) {
        return this.equations[this.equation](x, y, n)
      } else {
        return 1
      }
    },

    // Scale v over max to v over contrast, then mod against max in case v > max
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
      this.frame += (1 / this.frameRate)
    },

    // Start animation using requestAnimationFrame()
    start () {
      let draw = () => {
        if (this.realFrame % this.frameRate === 0) this.drawFrame()
        this.realFrame += 1
        window.requestAnimationFrame(draw)
      }
      window.requestAnimationFrame(draw)
    }
  },
  mounted () {
    this.start()
  },
  components: { Undulator }
}
</script>

<style lang="scss">
  @import '../../sass/sass-only/app';

  .math {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -2;
	  border-top-left-radius: 65px;
	  border-top-right-radius: 65px;
		overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 1;
      background: linear-gradient(45deg, $primary, $secondary);
      mix-blend-mode: multiply;

      @supports not (mix-blend-mode: multiply) {
        opacity: 0.2;
      }
    }

    canvas {
      position: absolute;
      z-index: 0;
    }
  }
</style>
