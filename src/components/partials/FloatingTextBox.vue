<template>
  <div class="floatingtextbox">
    <h2>{{ text }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'FloatingTextBox',
    props: {
      text: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../../assets/scss/_variables.scss";

  .floatingtextbox {
    padding: 15px 30px;
    background: $white;
    color: $pink;
    font-size: 24px;
    font-family: serif;
    display: inline-block;
    box-shadow: 0 15px 30px rgba($lavender-dark, 0.2);

    &.right {
      float: right;
    }

    h2 {
      margin: 5px 0 0 0;
      font-size: 40px;
      letter-spacing: -1px;
    }
  }
</style>
