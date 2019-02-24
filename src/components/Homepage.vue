<template>
  <section class="intro">
    <img class="background" src="../assets/images/general/gradient_bg.png" />
    <div class="content container">
      <FloatingTextBox text="hi, i'm renae —"/>
      <div class="col-md-6 col-lg-5 mt-5">
        <p>
          I’m a 24-year old UI developer currently living and working in Des Moines, Iowa. You can find me full-time at <a href="https://shiftdsm.com" target="_blank">SHIFT</a>, but I also take on side projects here and there — please reach out if you’re interested!
        </p>
        <p>
          I’m passionate about designing functional solutions for whatever problems my clients are trying to tackle — and I’ve never been afraid to get my hands dirty and learn something new.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import FloatingTextBox from './partials/FloatingTextBox.vue';

export default {
  name: 'Header',
  props: {
    msg: String
  },
  components: {
    FloatingTextBox
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
      top: 190px;
      position: relative;
    }
  }
</style>
