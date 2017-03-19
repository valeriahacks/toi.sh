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

    <math pixel-size="9" />

    <main>
      <div class="intro">
        <h3>
          I'm a fullstack web developer that really likes
          <scroller :words="[
            'functional programming',
            'red pandas',
            'colour theory',
            'haskell',
            'docker',
            'UX/UI design',
            'team management',
            'unit testing',
            'excessive laptop stickers',
            'modern javascript',
          ]" />
        </h3>
      </div>
    </main>
  </div>
</template>

<script>
  import Math from '../components/Math/Math.vue'
  import Odometer from '../components/Odometer.vue'
  import Scroller from '../components/Scroller.vue'

  export default {
    components: { Math, Odometer, Scroller }
  }
</script>

<style lang="scss">
  @import '../sass/sass-only/app';

  .page {
    display: flex;
    flex-wrap: wrap;

    main {
      position: relative;
      width: 100vw;
      max-width: 970px;
      margin: 0 auto 40px;
      padding: 55px 35px 105px;
      box-sizing: border-box;
    }

    .greeting {
      flex: 1 0 320px;
      font-family: $reg;
      min-height: 470px;

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
        font-size: 6rem;
        line-height: 6.5rem;
      }

      p {
        font-size: 2rem;
        margin-top: -9px;
        line-height: 39px;

        strong {
          display: block;
          font-size: 2.7rem;
          font-weight: 600;
        }

        small {
          display: block;
          font-size: 1rem;
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

    .intro {
      user-select: none;

      h3 {
        font-size: 1.45rem;
        border-bottom: 0;
        color: #999;
        font-weight: normal;
        text-align: center;

        .scroller {
          color: darken($luke1, 2);
          font-weight: bold;
        }
      }
    }
  }
</style>
