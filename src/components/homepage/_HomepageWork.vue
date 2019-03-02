<template>
  <section class="work" id="work">
    <div class="container">
      <span class="casestudy-label">Case Studies —</span>
      <FloatingTextBox
        text="i get shit done"
        v-anime="{ 
          translateY: ['-400px', '0px'],
          opacity: [0, 1],
          duration: 2000,
        }"
        class="right"
      />
      <CaseStudyEntryPoint/>
    </div>
  </section>
</template>

<script>
import FloatingTextBox from '../partials/FloatingTextBox.vue';
import CaseStudyEntryPoint from './casestudies/_CaseStudyEntryPoint.vue';

export default {
  name: 'HomepageWork',
  components: {
    FloatingTextBox,
    CaseStudyEntryPoint
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../../assets/scss/_variables.scss";

  .work {
    position: relative;
    margin-top: 60px;
    margin-bottom: 100px;
    background-image: url('../../assets/images/general/background_texture.svg');
    background-size: 200px;
    background-repeat: no-repeat;
    background-position: 0% 0%;
  }

  .casestudy {
    &-label {
      position: absolute;
      transform: rotate(-90deg);
      left: -105px;
      top: 90px;
      text-transform: uppercase;
      font-size: 14px;
      letter-spacing: 2px;
      font-weight: 600;
      color: $pink;
    }
  }
</style>
