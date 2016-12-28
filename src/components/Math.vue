<template>
  <canvas :id="id" :width="window.width" :height="window.height" :style="canvasStyle"></canvas>
</template>

<script>
import equations from '../equations.js'
export default {
  data () {
    return {
      id: 'c-' + (new Date()).getTime(),
      useEquation: Math.floor(Math.random() * (equations.length - 1)),
      interval: null,
      frame: 0,
      settings: {
        pixelSize: 7,
        detail: 1,
        framerate: 150,
        contrast: 0.4
      },
      window: {
        height: 0,
        width: 0
      }
    }
  },
  computed: {
    canvas () {
      return document.querySelector('canvas#' + this.id)
    },
    ctx () {
      return (this.canvas ? this.canvas.getContext('2d') : null)
    },
    canvasStyle () {
      return 'opacity:' + this.settings.contrast / 6
    },
    rows () {
      return (this.window.width / this.settings.pixelSize) * this.settings.detail
    },
    columns () {
      return (this.window.height / this.settings.pixelSize) * this.settings.detail
    },
    increment () {
      return 1 / this.settings.detail
    }
  },
  methods: {
    equation (x, y, n) {
      return equations[this.useEquation](x, y, n)
    },
    scale () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    },
    bound (v, max) {
      return Math.floor(((v / max) * (this.settings.contrast * max)) + (max - (this.settings.contrast * max))) % max
    },
    cellColour (v) {
      let boundedValue = this.bound(v, 255)
      return 'rgb(' + boundedValue + ', ' + boundedValue + ', ' + boundedValue + ')'
    },
    drawFrame () {
      for (let x = 0; x < this.rows; x += this.increment) {
        for (let y = 0; y < this.columns; y += this.increment) {
          let result = this.equation(x, y, this.frame)
          this.ctx.fillStyle = this.cellColour(result)
          this.ctx.fillRect(x * this.settings.pixelSize, y * this.settings.pixelSize, this.settings.pixelSize, this.settings.pixelSize)
        }
      }
      this.frame += 1
    }
  },
  mounted () {
    this.interval = setInterval(this.drawFrame.bind(this), this.settings.framerate)
    this.scale()
    window.onresize = this.scale.bind(this)
  },
  destroyed () {
    clearInterval(this.interval)
    window.onscroll = null
  }
}
</script>

<style lang="scss" scoped>
  canvas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
</style>
