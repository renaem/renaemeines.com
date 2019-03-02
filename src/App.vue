<template>
  <div id="app">
    <Header msg="Welcome to my website :)"/>
    <Homepage/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Homepage from './components/Homepage.vue';

export default {
  name: 'app',
  components: {
    Header,
    Homepage
  }
}

</script>

<style lang="scss">
  @import "./assets/scss/_variables.scss";

  body {
    margin: 0;
  }

  h2 {
    font-family: $font-serif;
  }

  a {
    color: $pink;
    font-weight: 600;
    text-decoration: underline;
  }

  #app {
    font-family: $font-sans;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0px;
  }

  .container {
    position: relative;
  }
</style>
