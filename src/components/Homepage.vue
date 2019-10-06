<template>
  <main class="main">
    <HomepageIntro/>
    <HomepageWork/>
    <HomepageContact/>
  </main>
</template>

<script>
import HomepageIntro from './homepage/_HomepageIntro.vue';
import HomepageWork from './homepage/_HomepageWork.vue';
import HomepageContact from './homepage/_HomepageContact.vue';

export default {
  name: 'Homepage',
  components: {
    HomepageIntro,
    HomepageWork,
    HomepageContact
  }
}
</script>
