<template>
  <div class="page home">
    <div class="greeting">
      <div class="col">
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
        </p>
      </div>
      <div class="col bottom">
        <div class="social">
          <a href="https://twitter.com/toishpanda" target="_blank" v-html="require('../assets/svg/icon-twitter.svg')"></a>
          <a href="https://github.com/toish" target="_blank" v-html="require('../assets/svg/icon-github.svg')"></a>
        </div>
        <p>I check my email a lot.</p>
        <a href="mailto:toish@toi.sh" class="btn">Let's talk.</a>
      </div>
    </div>

    <math pixel-size="9" />

    <main>

      <div class="facts">
        <h3>
          I'm a web developer with <experience-timer /> of experience
          <br />
          that really likes
          <scroller :words="[
            'unit testing',
            'red pandas',
            'colour theory',
            'haskell',
            'macOS',
            'docker',
            'dark roast',
            'UX/UI design',
            'vim',
            'unit testing',
            'ZSH',
            'wordpress',
            'laptop stickers',
            'ECMAscript 6',
            'nginx',
            'github',
            'secure shell',
            'illustrator',
            'vue js',
            'expresso',
            'react',
            'mitril',
            'SEO',
            'web marketing',
            'git scm',
            'SASS',
            'babel',
            'eslint',
            'strict types'
          ]" />
          <span class="hide-in-mobile">for some reason</span>
        </h3>
      </div>

      <div class="intro">
        <h4>Who I am</h4>
        <p>
          I've been working on and tweaking computers most of my life. My interest in making machines do things has always driven me to try new things. There's something about making a system as complex as a computer accomplish something, no matter how small, I still find amazing; which is pretty much the only reason I do what I do. (If I was in it for the fame and money, I'd be a full time Haskell dev.)
        </p>
        <p>
          I spend a lot of my time working on my side-projects. You can check out my <a href="https://github.com/toish" target="_blank">github</a> to see a list of the best ones. Everything from messing around with random <a href="https://github.com/toish/toi.sh/blob/master/src/js/equations.js" target="_blank">Math functions in JS</a> for the trippy pattern you see above, to a very over-engineered <a href="https://github.com/toish/unfuck" target="_blank">Brainf*ck compiler</a>. I also have an inexplicable love for red pandas. They're pretty much the best thing ever. (Better than cats, Matt.)
        </p>
      </div>
    </main>
  </div>
</template>

<script>
  import Math from '../components/Math/Math.vue'
  import Odometer from '../components/Odometer.vue'
  import Scroller from '../components/Scroller.vue'
  import ExperienceTimer from '../components/ExperienceTimer.vue'

  export default {
    components: { Math, Odometer, Scroller, ExperienceTimer }
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
      padding: 270px 0;
      box-sizing: border-box;

      @media screen and (max-width: 807px) {
        padding-top: 190px;
      }

      @media screen and (max-width: 424px) {
        padding-top: 170px;
      }
    }

    .greeting {
      flex: 1 0 1px;
      display: flex;
      flex-wrap: wrap;
      font-family: $reg;
      min-height: 240px;
      padding: 0 calc(25px + 3vw);

      @media screen and (max-width: 895px) {
        margin-bottom: 50px;
        max-width: calc(100vw - 117px);
      }

      .col {
        position: relative;

        &.bottom {
          flex: 1 1 320px;
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;
          padding-bottom: 24px;
          margin-left: 50px;

          .social {
            margin-bottom: 15px;

            svg {
              width: 40px;
              margin: 0 6px;
              transform: scale(1);
              transition: transform 0.3s $expo;

              &:hover {
                transform: scale(1.1);
              }

              &:last-child {
                margin-right: 0;
              }
            }
          }

          @media screen and (max-width: 762px) {
            flex: 1 1 100vw;
            margin-left: 0;
            align-items: flex-start;

            p {
              display: none;
            }
          }

          p {
            font-size: 1.5rem;
            margin-bottom: 10px;
          }
        }
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

        @media screen and (max-width: 807px) {
          font-size: 5rem;
          line-height: 5.7rem;
        }

        @media screen and (max-width: 424px) {
          font-size: 4.5rem;
          line-height: 5.3rem;
        }
      }

      a.btn {
        bottom: 0;
        display: block;
        color: #FFF;
        font-size: 1.5rem;
        line-height: 40px;
        padding: 0 15px 3px;
        text-decoration: none;
        border: 1px solid #FFF;
        border-radius: 5px;
        transform: translateY(0);
        width: 80px;
        text-align: center;

        &:hover {
          transform: translateY(5px);

          &::after {
            bottom: -2px;
          }
        }

        &:active {
          background: #FFF;
          color: $primary;
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

      p {
        font-size: 2rem;
        margin-top: -9px;
        line-height: 39px;

        @media screen and (max-width: 807px) {
          font-size: 1.75rem;
          line-height: 35px;
        }

        @media screen and (max-width: 424px) {
          font-size: 1.5rem;
          line-height: 29px;
        }

        strong {
          display: block;
          font-size: 2.7rem;
          font-weight: 600;

          @media screen and (max-width: 807px) {
            font-size: 1.95rem;
          }

          @media screen and (max-width: 424px) {
            font-size: 1.75rem;
          }
        }

        small {
          display: block;
          font-size: 1rem;
          line-height: 26px;
          margin: 10px 0 15px;

          @media screen and (max-width: 424px) {
            margin: 0 0 15px;
          }

          span {
            display: inline-block;
            padding: 0 7px 2px;
            color: $primary;
            background: #FFF;
            border-radius: 5px;

            @media screen and (max-width: 424px) {
              padding: 0 0 0;
              color: #fff;
              background: none;
              margin: 1px;
            }
          }
        }

        em {
          font-style: normal;
          font-weight: 800;
        }
      }
    }

    .facts {
      margin: 10px 0 70px;

      h3 {
        font-size: 1.45rem;
        border-bottom: 0;
        color: $inverse;
        font-weight: normal;
        text-align: center;
        user-select: none;

        @media screen and (max-width: 424px) {
          padding: 0 15px;
        }

        .scroller {
          color: darken($primary, 2);
          font-weight: bold;
          text-align: left;
        }

        @media screen and (max-width: 807px) {
          line-height: 35px;

          .hide-in-mobile {
            display: none;
          }

          .scroller {
            display: block;
            margin-top: 40px;
            font-size: 1.25rem;

            .word {
              border-width: 0 !important;
            }
          }
        }

        @media screen and (max-width: 424px) {
          .scroller {
            .word {
              &.long { font-size: 1.6rem; }
              &.medium { font-size: 1.8rem; }
              &.short { font-size: 2.1rem; }
            }
          }
        }
      }
    }
  }
</style>
