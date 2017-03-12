<template>
  <div class="page home">
    <div class="greeting">
      <h2>
        <odometer delay="700" speed="95">Hello!</odometer>
      </h2>
      <p>
        <strong>My name’s <em>Toish.</em></strong>
        I make software for fun.
        <small>
          <span>JS (ES6)</span>
          -
          <span>Typescript</span>
          -
          <span>PHP</span>
          -
          <span>Haskell</span>
        </small>
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

<style lang="scss">
  @import '../sass/sass-only/app';

  .page {
    display: flex;
    flex-wrap: wrap;

    .greeting {
      flex: 1 0 320px;
      font-family: $reg;

      @media screen and (max-width: 895px) {
        margin-bottom: 50px;
      }

      h2,
      p {
        margin: 0;
        color: #FFF;
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

        strong {
          display: block;
          font-size: 3rem;
          font-weight: 600;
        }

        small {
          display: block;
          font-size: 1.27rem;
          line-height: 26px;
          margin: 10px 0 15px;

          span {
            display: inline-block;
            padding: 0 7px 2px;
            color: $luke1;
            background: #FFF;
            border-radius: 5px;
          }
        }

        a {
          position: relative;
          display: inline-block;
          color: #FFF;
          font-size: 1.5rem;
          line-height: 40px;
          padding: 0 15px 3px;
          text-decoration: none;
          border: 1px solid #FFF;
          border-radius: 5px;
          transform: translateY(0px);

          &:hover {
            transform: translateY(5px);

            &::after {
              bottom: -2px;
            }
          }

          &:active {
            background: #FFF;
            color: $luke1;
          }

          &::after {
            content: "";
            display: block;
            position: absolute;
            left: -1px;
            top: -1px;
            bottom: -7px;
            width: 100%;
            border: inherit;
            border-radius: inherit;
          }
        }

        em {
          font-style: normal;
          font-weight: 800;
        }
      }
    }

    .blocks {
      flex: 1 1 470px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;

      @media screen and (max-width: 895px) {
        flex: 1 1 100%;
        margin: 30px -15px;
        justify-content: flex-start !important;
      }

      .block {
        flex: 0 0 175px;
        height: 175px;
        margin: 15px;
        position: relative;
        border: 1px solid #FFF;

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
