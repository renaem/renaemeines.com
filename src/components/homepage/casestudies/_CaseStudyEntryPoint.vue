<template>
  <div>
    <div class="slider__nav">
      <span class="slider__number">{{ '0' + slider_count }}</span>
      <div class="slider__arrows">
        <LeftArrow
          @click="activeSlide('--')"
          v-bind:class="leftArrowClass"
        />
        <RightArrow
          @click="activeSlide('++')"
          v-bind:class="rightArrowClass"
        />
      </div>
    </div>
    <CaseStudy v-for="study in case_studies" :key="study.position" :data="study" :active_slide="slider_count"/>
  </div>
</template>

<script>
import CaseStudy from './_CaseStudy.vue';
import LeftArrow from '../../../assets/images/general/arrow_left.svg?inline';
import RightArrow from '../../../assets/images/general/arrow_right.svg?inline';

export default {
  name: 'CaseStudyEntryPoint',
  components: {
    CaseStudy,
    LeftArrow,
    RightArrow
  },
  data: () => ({
    slider_count: 1,
    case_studies: {
      navigate: {
        position: 1,
        title: 'Navigate Wellbeing Mobile App',
        tags: [
          'UI/UX Design',
          'Icon Set',
          'Mobile App',
          'Art Direction'
        ],
        type: 'mobile',
        assets: {
          'video': '/navigate/navigate.webm',
          'image': '/navigate/stats_interior.png',
          'image_2': '/navigate/stats.png',
        },
        description: '<a href="">Navigate Wellbeing</a> is an online health and wellness platform that supports wellbeing & culture in the workplace, along with the added bonus of lowering insurance rates for employees. When they needed to launch new native mobile applications, I was able to redesign the online portal for mobile use, along with general look and feel.'
      },
      vermeer: {
        position: 2,
        title: 'Vermeer Forage Commander App',
        tags: [
          'UI/UX Design',
          'Mobile App'
        ],
        type: 'mobile',
        description: 'Forage Commander is a mobile application that Bluetooth syncs with Vermeer balers for farmers to keep track of cutting volume, manage customers, generate invoices, and more. I was involved in the design portion of this project, building off of wireframes and alongside the app development team.'
      },
      intrans: {
        position: 3,
        title: 'ISU Institute for Transportation Website',
        tags: [
          'Wordpress Development',
          'Multisite',
          'Vue.js'
        ],
        type: 'website',
        description: 'The Iowa State University Institute for Transportation (InTrans) needed a performant and scalable solution for the sixteen (16) centers that it houses. I was the primary developer on the frontend and WordPress Multisite build. I developed a single theme that is flexible enough to customize each center, while maintaining the ISU brand standards. There are nearly 50 different page templates, an enterprise custom event solution, and a complex delivery system for sharing content across child sites — research, publications, news, events, and more.'
      },
      toggle: {
        position: 4,
        title: 'Blockchain Shipping Platform',
        tags: [
          'UI/UX Design',
          'Mobile App',
          'Product Design'
        ],
        description: 'Shift was contacted to do discovery work for a blockchain shipping platform. My role included brand development and interface designs; I worked closely with our business analyst to make sure all requirements were accounted for in this highly technical and functional system.'
      }
    }
  }),
  methods: {
    activeSlide: function (operator) {
      if(operator === '++' && this.slider_count < Object.keys(this.case_studies).length) {
        this.slider_count++;
      } else if(operator === '--' && this.slider_count > 1) {
        this.slider_count--;
      }
    }
  },
  computed: {
    leftArrowClass: function() {
      if(this.slider_count === 1) {
        return 'slider__arrows_single disabled';
      } else {
        return 'slider__arrows_single';
      }
    },
    rightArrowClass: function() {
      if(this.slider_count === Object.keys(this.case_studies).length) {
        return 'slider__arrows_single disabled';
      } else {
        return 'slider__arrows_single';
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../../assets/scss/_variables.scss";

  .slider {
    &__nav {
      display: flex;
      align-items: center;
    }

    &__number {
      font-weight: 100;
      font-size: 72px;
      color: $pink;
      display: inline-block;
      margin-right: 30px;
      width: 80px;
    }

    &__arrows {
      &_single {
        width: 35px;
        height: auto;
        display: inline-block;
        margin-right: 10px;
        cursor: pointer;

        &.disabled {
          opacity: 0.25;
        }
      }
    }
  }
</style>
