<template>
  <div class="page home">
    <div class="masthead" :style="'height: ' + ($root.masthead.height - 190) + 'px'">
      <div class="greeting">
        <div class="col">
          <h2>
            <odometer delay="700" speed="95">Hello!</odometer>
          </h2>
          <p>
            <strong>My name’s <em>Graham.</em></strong>
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
            <!--a href="https://twitter.com/toishpanda" target="_blank" v-html="require('../assets/svg/icon-twitter.svg')"></a-->
            <a href="https://github.com/toish" target="_blank" v-html="require('../assets/svg/icon-github.svg')"></a>
            <a href="https://www.linkedin.com/in/graham-pegg/" target="_blank" v-html="require('../assets/svg/icon-linkedIN.svg')"></a>
          </div>
          <p style="text-align:right;line-height:25px;">I check my email a lot.</p>
          <a href="mailto:toish@toi.sh" class="btn">Let's talk.</a>
        </div>
      </div>

      <math :pixel-size="10" />
    </div>

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
            'UX/UI design',
            'vim',
            'unit testing',
            'ZSH',
            'wordpress',
            'laptop stickers',
            'ECMAscript 6',
            'nginx',
            'github',
            'illustrator',
            'vue js',
            'react',
            'mitril',
            'SEO',
            'git scm',
            'SASS',
            'babel',
            'eslint',
            'strict types'
          ]" />
          <span class="hide-in-mobile">for some reason</span>
        </h3>
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

    .masthead {
      width: 100%;
    }

    main {
      position: relative;
      width: 100vw;
      max-width: 970px;
      margin: 0 auto;
      padding: 35px 0;
      box-sizing: border-box;

      @media screen and (max-width: 807px) {
        padding-top: 190px;
      }

      @media screen and (max-width: 424px) {
        padding-top: 40px;
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
      margin: 40px 0;
      padding: 20px 0;
      position: relative;
      z-index: 10;

      @media screen and (max-width: 424px) {
        padding: 20px 25px 55px;
      }

      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: calc(50% - 50vw);
        height: 100%;
        width: 100vw;
        border-top: 10px solid #fff;
        border-bottom: 10px solid #fff;
        box-shadow: 0 0 40px 0px rgba(56, 36, 41, 0.25);
        background: linear-gradient(45deg, $primary, $secondary);
        z-index: -1;
      }

      h3 {
        font-size: 1.45rem;
        border-bottom: 0;
        color: $tertiary;
        font-weight: normal;
        text-align: center;
        user-select: none;

        @media screen and (max-width: 424px) {
          padding: 0 15px;
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
