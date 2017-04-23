<template>
  <div class="experience-timer">
    <span class="years">
      <strong>{{ years }}</strong>
      <strong class="fraction">
        <sup>{{ fraction.numerator }}</sup>
        &frasl;
        <sub>{{ fraction.denominator }}</sub>
      </strong>
    </span>
    years
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    data () {
      return {
        since: moment('2013-09-23 12:00:00'),
        now: moment()
      }
    },
    computed: {
      duration () {
        return moment.duration(this.now.diff(this.since))
      },
      years () {
        return this.duration.years()
      },
      months () {
        return this.duration.months()
      },
      hours () {
        return this.duration.hours()
      },
      minutes () {
        return this.duration.minutes()
      },
      seconds () {
        return this.duration.seconds()
      },
      fraction () {
        let gcd = this.gcd(this.months, 12)
        return {
          numerator: this.months / gcd,
          denominator: 12 / gcd
        }
      }
    },
    methods: {
      gcd (a, b) {
        return b ? this.gcd(b, a % b) : a
      }
    },
    mounted () {
      setInterval(() => {
        this.now = moment()
      }, 1000)
    }
  }
</script>

<style lang="scss">
  @import '../sass/sass-only/app';

  .experience-timer {
    display: inline-block;

    .years {
      border: 1px solid $tertiary;
      display: inline-block;
      height: 1.4em;
      line-height: 1.3;
      padding: 1px 8px 3px;
      margin: 0 2px;

      .fraction {
        letter-spacing: 0px;
        font-size: 19px;
        line-height: 0px;
        margin-left: -2px;
        margin-right: 1px;

        sup { margin-right: -3px; }
        sub { margin-left: -3px; }
      }
    }
	}
</style>
