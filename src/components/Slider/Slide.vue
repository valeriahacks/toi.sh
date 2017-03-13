<template>
  <div :class="'slide' + (animation ? ' ' + animation : '')">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      gradientFrom: {
        type: String,
        required: true
      },
      gradientTo: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        animation: '',
        shown: false
      }
    },
    methods: {
      show (dir) {
        if (dir === 'left') {
          this.animation = 'from-right'
        } else if (dir === 'right') {
          this.animation = 'from-left'
        } else {
          this.animation = 'force-show'
        }
        this.shown = true
      },
      hide (dir) {
        if (dir === 'left') {
          this.animation = 'to-right'
        } else if (dir === 'right') {
          this.animation = 'to-left'
        } else {
          this.animation = 'force-hide'
        }
        this.shown = false
      }
    },
    created () {
      this.$parent.add(this)
    }
  }
</script>

<style lang="scss">
  @import '../../sass/sass-only/_app.scss';

  /**
   * Keyframes
   */

  @keyframes fromright {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes fromleft {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes toright {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }

  @keyframes toleft {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  .slide {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    transform: translateX(100%);

    &.from-right {
      animation: fromright 1550ms $expo 0s 1 normal;
      animation-fill-mode: forwards;
    }

    &.from-left {
      animation: fromleft 1550ms $expo 0s 1 normal;
      animation-fill-mode: forwards;
    }

    &.to-right {
      animation: toright 1550ms $expo 0s 1 normal;
      animation-fill-mode: forwards;
    }

    &.to-left {
      animation: toleft 1550ms $expo 0s 1 normal;
      animation-fill-mode: forwards;
    }

    &.force-show { transform: translateX(0); }
    &.force-hide { transform: translateX(100%); }
  }
</style>
