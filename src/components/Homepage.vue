<template>
  <main class="main">
    <div>{{ info }}</div>
    <HomepageIntro/>
    <HomepageWork/>
  </main>
</template>

<script>
import axios from 'axios';
import HomepageIntro from './homepage/_HomepageIntro.vue';
import HomepageWork from './homepage/_HomepageWork.vue';

export default {
  name: 'Homepage',
  components: {
    HomepageIntro,
    HomepageWork
  },
  mounted() {
    // authorize
    axios
      .get('https://accounts.spotify.com/authorize')
      .then(
        // return playing data
        axios
          .get('https://api.spotify.com/v1/me/player/currently-playing')
          .then(response => (this.info = response))
      )
  }
}
</script>
