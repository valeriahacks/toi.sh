<template>
  <div class="page home">
    <button @click="equation -= 1">Prev</button>
    <select v-model="equation">
      <option v-for="(_this, index) in equations" :value="index">
        {{ index }}
        {{ (_this.good === null ? '?' : (_this.good ? '✔' : '✖')) }}
      </option>
    </select>
    <button @click="equation += 1">Next</button>
    <button @click="good">Good!</button>
    <button @click="bad">Bad!</button>
    <div class="out"><textarea>{{ output }}</textarea></div>

    <math :equation="equation"/>
  </div>
</template>

<script>
  import Math from '../components/Math.vue'
  import equations from '../js/equations.js'

  export default {
    components: { Math },
    data () {
      return {
        equation: 0,
        equations: equations.map((fn) => ({fn, good: null}))
      }
    },
    computed: {
      current () {
        return this.equations[this.equation]
      },
      output () {
        var good = this.equations.filter((e) => e.good !== false)
        good = good.map((e) => e.fn.toString())
        good = good.map((fn) => fn.replace(/function (?=\(\w, \w, \w\) {)/g, ''))
        good = good.map((fn) => fn.replace(/\) {\s*/g, ') => '))
        good = good.map((fn) => fn.replace(/\sreturn\s/g, ' '))
        good = good.map((fn) => fn.replace(/;\s}/g, ','))
        good = good.map((fn, i) => '/*' + i + '*/\t' + fn)
        if (good.length) good[good.length - 1] = good[good.length - 1].slice(0, -1)

        var file = '/* eslint-disable */\n\nexport default [\n'
        good.forEach((fn) => {
          file += fn + '\n'
        })
        file += ']'
        return file
      }
    },
    methods: {
      good () {
        this.$set(this.equations[this.equation], 'good', true)
      },
      bad () {
        this.$set(this.equations[this.equation], 'good', false)
      }
    }
  }
</script>

<style scoped>
  .page {
    flex-wrap: wrap;
  }

  .out {
    flex: 1 1 100%;
  }
</style>
