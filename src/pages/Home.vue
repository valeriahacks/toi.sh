<template>
  <div class="page home">
    <div class="greeting">
      <h2>
        <odometer delay="700" speed="95">Hello!</odometer>
      </h2>
      <p>
        <strong>My name’s <em>Toish.</em></strong>
        I make software for fun.
        <small>JS (ES6) - Typescript - PHP - Haskell</small>
        <a href="http://www.google.com/recaptcha/mailhide/d?k=011zVk7iGdP7_to08FCy1HsA==&c=p8MbtM9S4D2FMU1Rnmu2SQ==" target="_blank">Let's talk.</a>
      </p>
    </div>

    <div class="blocks">
      <div class="block github">
        <a href="http://github.com/toish"></a>
      </div>
      <div class="block twitter">
        <a href="http://twitter.com/toishpanda"></a>
      </div>
      <!--div class="block citrus">
        <a href="http://citrusmedia.com"></a>
      </div-->
    </div>

    <math />
  </div>
</template>

<script>
  import Math from '../components/Math.vue'
  import Odometer from '../components/Odometer.vue'

  export default {
    components: { Math, Odometer }
  }
</script>

<style lang="scss" scoped>
  @import '../sass/sass-only/app';

  .page {
    display: flex;
    flex-wrap: wrap;

    .greeting {
      flex: 1 0 320px;
      font-family: $reg;

      h2,
      p {
        margin: 0;
      }

      h2 {
        font-weight: 700;
        font-size: 6.5rem;
        line-height: 6.5rem;
      }

      p {
        font-size: 2.3rem;
        margin-top: -9px;
        line-height: 47px;
        color: lighten($warmgrey, 20);

        strong {
          display: block;
          font-size: 3rem;
          font-weight: 600;
          color: $warmgrey;
        }

        small {
          display: block;
          font-size: 1.5rem;
          margin-top: -5px;
          color: lighten($warmgrey, 40);
        }

        a {
          display: inline-block;
          color: #FFF;
          font-size: 1.5rem;
          line-height: 40px;
          padding: 0 15px 3px;
          border-radius: 4px;
          text-decoration: none;
          background-color: $luke1;
          transition: 0.15s background-color ease;
          transform: translateY(-3px);

          &:hover { background-color: $luke2; }
        }

        em {
          @keyframes rainbowColor {
            33.3% { color: $luke1; }
            66.6% { color: $luke2; }
            100% { color: $luke3; }
          }
          animation: 3s ease 0s infinite alternate rainbowColor;
          font-style: normal;
          color: $purple;
        }
      }
    }

    .blocks {
      flex: 1 1 640px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;

      @media screen and (max-width: 1075px) {
        margin: 30px -15px;
        justify-content: flex-start !important;
      }

      .block {
        flex: 0 0 175px;
        height: 175px;
        margin: 15px;
        position: relative;

        @media screen and (max-width: 460px) {
          flex: 1 1 175px;
          background-size: 100px !important;
        }

        a {
          display: block;
          height: 100%;
          width: 100%;
        }

        &.github { background: url('../assets/github.png') center/50% no-repeat $luke1; }
        &.twitter { background: url('../assets/twitter.png') center/50% no-repeat $luke2; }
        &.citrus { background: url('../assets/citrus.png') center/60% no-repeat $luke3; }
      }
    }
  }
</style>
