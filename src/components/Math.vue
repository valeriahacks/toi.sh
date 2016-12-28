<template>
  <canvas :id="id" :width="window.width" :height="window.height"></canvas>
</template>

<script>
export default {
  data () {
    return {
      id: 'c-' + (new Date()).getTime(),
      interval: null,
      frame: 0,
      settings: {
        pixelSize: 7,
        detail: 1,
        framerate: 100
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
      return Math.floor((x - y | n) & (y + x | n))
    },
    scale () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    },
    drawFrame () {
      for (let x = 0; x < this.rows; x += this.increment) {
        for (let y = 0; y < this.columns; y += this.increment) {
          let result = this.equation(x, y, this.frame)
          this.ctx.fillStyle = 'rgb(' + ((result % 20) + 222) + ', ' + ((result % 20) + 222) + ', ' + ((result % 20) + 222) + ')'
          this.ctx.fillRect(x * this.settings.pixelSize, y * this.settings.pixelSize, this.settings.pixelSize, this.settings.pixelSize)
        }
      }
      this.frame += 1
    }
  },
  mounted () {
    this.interval = setInterval(this.drawFrame.bind(this), this.framerate)
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
