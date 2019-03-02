<template>
  <section class="intro" id="about">
    <img class="background" src="../../assets/images/general/gradient_bg.png" />
    <div class="content container">
      <FloatingTextBox
        text="hi, i'm renae —"
        v-anime="{ 
          translateY: ['-400px', '0px'],
          opacity: [0, 1],
          duration: 2000,
        }"
      />
      <SocialLinks
        v-anime="{
          translateX: ['-200px', '0px'],
          opacity: [0, 1],
          duration: 2000,
        }"
      />
      <div class="row">
        <div class="col-md-6 col-lg-5 mt-5 p-0 copy">
          <p>I’m a 24-year old UI developer currently living and working in Des Moines, Iowa. You can find me full-time at <a href="https://shiftdsm.com" target="_blank">SHIFT</a>, but I also take on side projects here and there — please reach out if you’re interested!</p>
          <p>I'm passionate about designing functional solutions for whatever problems my clients are trying to tackle — and I've never been afraid to get my hands dirty and learn something new.</p>
        </div>
        <div class="col-md-6 col-lg-6 offset-lg-1">
          <HomepageThree/>
        </div>
      </div>
      <div class="col-md-6 col-lg-5 p-0 d-flex justify-content-center scroll">
        <ScrollHandIcon
          class="hand"
          v-on:mouseover="mouseOver"
          v-on:mouseout="mouseOut"
          v-bind:class="{'on': active, 'off': !active}"
        />
      </div>
    </div>
  </section>
</template>

<script>
import HomepageThree from './_HomepageThree.vue';
import FloatingTextBox from '../partials/FloatingTextBox.vue';
import SocialLinks from '../partials/SocialLinks.vue';
import ScrollHandIcon from '../../assets/images/general/scroll_hand.svg?inline';

export default {
  name: 'HomepageIntro',
  components: {
    HomepageThree,
    FloatingTextBox,
    SocialLinks,
    ScrollHandIcon
  },
  data() {
    return {
      active: false,
    }
  },
  methods: {
    mouseOver: function() {
      this.active = true;
    },
    mouseOut: function() {
      this.active = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .intro {
    width: 100%;
    z-index: 1;

    .background {
      width: 100%;
      height: auto;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 0;
    }

    .content {
      top: 16.9vw;
      // margin-bottom: 16.9vw;
      margin-bottom: 250px;

      .copy {
        font-weight: 300;
      }
    }

    .scroll {
      .hand {
        width: 75px;
        height: auto;
        margin-right: 40px;
        cursor: pointer;

        &.off .rotate {
          animation-play-state: paused;
        }

        .rotate {
          animation: spin 10000ms linear;
          animation-fill-mode: forwards;
          transform-origin: center center;
        }
      }
    }
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
</style>
