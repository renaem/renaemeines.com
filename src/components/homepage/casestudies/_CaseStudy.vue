<template>
  <transition name="fade">
    <div v-if="active_slide === data.position" class="casestudy__single">
      <div>
        <div class="casestudy__title">
          <h3>{{ data.title }}</h3>
          <span v-for="tag in data.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <div class="casestudy__images">
          <div v-for="(value, key) in data.assets" :key="value" class="image">
            <div v-if="key == 'video'" class="phonewrapper">
              <div class="iphonex-bar"></div>
              <video width="200" controls autoplay muted loop :src="value"></video>
            </div>
            <div v-if="key.includes('image')" class="phonewrapper">
              <div class="iphonex-bar"></div>
              <img width="200" :src="value" />
            </div>
          </div>
        </div>
      </div>
      <div class="casestudy__description">
        <p v-html="data.description"></p>
        <button>View Case Study</button>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'CaseStudy',
  props: {
    data: Object,
    active_slide: Number,
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
  @import "../../../assets/scss/_variables.scss";

  .casestudy {
    &__single {
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-column-gap: 36px;
    }

    &__title {
      margin-bottom: 40px;
    }
  }

  h3 {
    color: $pink;
    font-size: 36px;
    max-width: 75%;
  }

  p {
    font-weight: 300;
  }

  .tag {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 1px;

    &:not(:last-child) {
      &::after {
        content: "•";
        width: 20px;
        display: inline-block;
        text-align: center;
      }
    }
  }

  button {
    background: url('../../../assets/images/general/button_bg.png');
    background-size: 105%;
    background-position: center center;
    border-radius: 25px;
    border: 0;
    padding: 10px 40px;
    font-size: 13px;
    color: $white;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    transition: 0.3s;
    box-shadow: 0 15px 30px rgba($lavender-dark, 0.2);

    &:hover {
      background-size: 180%;
    }
  }

  .image {
    display: inline-block;
    position: relative;
    z-index: 10;

    &:nth-child(2) {
      position: absolute;
      z-index: 9;
      left: 100px;
      transition: 0.3s;

      &:hover {
        transform: translateX(100px) translateY(-100px);
      }
    }

    &:nth-child(3) {
      position: absolute;
      z-index: 8;
      left: 200px;
      transition: 0.3s;

      &:hover {
        transform: translateX(100px) translateY(-100px);
      }
    }
  }

  .phonewrapper {
    background: black;
    padding: 16px;
    border-radius: 35px;
    position: relative;
    display: inline-block;
    box-shadow: 0 15px 30px rgba($lavender-dark, 0.2);

    video,
    img {
      position: relative;
      z-index: 1;
      border-radius: 25px;
      display: block;
    }

    .iphonex-bar {
      width: 105px;
      height: 16px;
      background: black;
      border-radius: 0 0 10px 10px;
      margin: 0 auto;
      position: absolute;
      left: 0;
      right: 0; 
      top: 15px;
      z-index: 2;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
      opacity: 0
  }
</style>
