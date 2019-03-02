<template>
  <div class="sociallinks mt-5">
    <a href="https://twitter.com/DoubleNaeBow" target="_blank">
      <font-awesome-icon :icon="['fab', 'twitter']" />
    </a>
    <a href="https://www.instagram.com/doublenaebow/" target="_blank">
      <font-awesome-icon :icon="['fab', 'instagram']" />
    </a>
    <a href="https://github.com/renaem" target="_blank">
      <font-awesome-icon :icon="['fab', 'github-alt']" />
    </a>
    <a href="https://www.linkedin.com/in/renaemeines/" target="_blank">
      <font-awesome-icon :icon="['fab', 'linkedin-in']" />
    </a>
  </div>
</template>

<script>
  export default {
    name: 'SocialLinks',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../../assets/scss/_variables.scss";

  .sociallinks {
    position: absolute;
    left: -50px;
    display: flex;
    flex-direction: column;
  }

  a {
    background-color: $pink;
    color: $white;
    border-radius: 25px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 15px 30px rgba($lavender-dark, 0.2);
    margin-bottom: 15px;
    transition: 0.3s;

    &:hover {
      background-color: $orange;
    }
  }
</style>
