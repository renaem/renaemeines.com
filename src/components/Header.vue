<template>
  <header>
    <div class="container d-flex justify-content-between align-items-center">
      <a href="/">
        <Logo class="logo"/>
      </a>
      <nav>
        <a href="#about">about</a>
        <a href="#work">work</a>
        <a href="#contact">contact</a>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from '../assets/images/general/logo.svg?inline';

export default {
  name: 'Header',
  props: {
    msg: String
  },
  components: {
    Logo
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/_variables.scss";

  header {
    height: 150px;
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    z-index: 100;

    nav {
      a {
        color: $white;
        font-weight: bold;
        margin-left: 40px;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
          color: $white;
        }
      }
    }
  }

  .logo {
    width: 100px;
    height: auto;
  }
</style>
