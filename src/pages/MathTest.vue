<template>
  <div class="page home">
    <button @click="equation -= 1">Prev</button>
    <select v-model="equation">
      <optgroup label="Standard">
        <option v-for="(_this, index) in equations" :value="index">
          {{ index }}
          {{ (_this.good === null ? '?' : (_this.good ? '✔' : '✖')) }}
        </option>
      </optgroup>
      <optgroup label="Custom">
        <option v-for="(_this, index) in extraEquations" :value="equations.length + index">
          {{ index }}
        </option>
      </optgroup>
    </select>
    <button @click="equation += 1">Next</button>
    <button @click="good">Good!</button>
    <button @click="bad">Bad!</button>
    <label>Contrast</label>
    <input type="range" min="0" max="1" step="0.05" v-model="contrast" />
    <label>&nbsp;| Pixel Size</label>
    <input type="range" min="4" max="50" step="1" v-model="pixelSize" />
    <label>&nbsp;| Detail</label>
    <input type="range" min="1" max="2.5" step="0.1" v-model="detail" />
    <input v-model="newFn" />
    <div class="out"><textarea>{{ output }}</textarea></div>

    <math :equation="equation"
          :extra-equations="extraEquations"
          :contrast="contrast"
          :pixel-size="pixelSize"
          :detail="detail"/>
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
        equations: equations.map((fn) => ({fn, good: null})),
        newFn: '(x, y, n) => x',
        contrast: 0.4,
        pixelSize: 7,
        detail: 1
      }
    },
    computed: {
      current () {
        return this.equations[this.equation]
      },
      extraEquations () {
        /* eslint-disable */
        try {
          return eval('[' + this.newFn + ']')
        } catch (e) {
          console.log(e)
          return []
        }
        /* eslint-enable */
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
