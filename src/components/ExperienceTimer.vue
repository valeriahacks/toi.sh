<template>
  <div class="experience-timer">
    <span class="years">
      <strong>{{ years }}</strong>yr,
    </span>
    <span class="hours">
      <strong>{{ hours }}</strong>hr,
    </span>
    <span class="minutes">
      <strong>{{ minutes }}</strong>m,
    </span>
    <span class="seconds">
      <strong>{{ seconds }}</strong>s
    </span>
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
      hours () {
        return this.duration.hours()
      },
      minutes () {
        return this.duration.minutes()
      },
      seconds () {
        return this.duration.seconds()
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
	}
</style>
