<template>
  <section class="contact pb-5" id="contact">
    <div class="container pb-5">
      <FloatingTextBox
        text="reach out"
        v-anime="{ 
          translateY: ['-350px', '-45px'],
          opacity: [0, 1],
          duration: 2000,
        }"
      />
      <div class="row">
        <div class="col-md-6">
          contact form
        </div>
        <div class="col-md-6" v-if="ready_1 === true && ready_2 === true">
          <div v-if="typeof recent_track.data.recenttracks.track[0]['@attr'] != 'undefined'" class="now-playing">
            <div class="record">
              <div class="middle"></div>
              <div class="inner"></div>
              <img :src="recent_track.data.recenttracks.track[0].image[2]['#text']" />
            </div>
            <span class="label">Now Playing</span>
            {{ recent_track.data.recenttracks.track[0].name }} <i>— {{ recent_track.data.recenttracks.track[0].artist['#text'] }}</i>
          </div>
          <div v-else class="last-played">
            <div class="record">
              <div class="middle"></div>
              <div class="inner"></div>
              <img :src="recent_track.data.recenttracks.track[0].image[2]['#text']" />
            </div>
            <span class="label">Last Played</span>
            {{ recent_track.data.recenttracks.track[0].name }} <i>— {{ recent_track.data.recenttracks.track[0].artist['#text'] }}</i>
            <div class="d-flex justify-content-between">
              <span class="label">
                {{ formatDate(recent_track.data.recenttracks.track[0].date['#text']) }}
              </span>
              <span class="label">
                {{ formatHour(recent_track.data.recenttracks.track[0].date['#text']) }}
              </span>
            </div>
          </div>
          <div class="top-artists">
            <span class="label">Top 5 Artists This Month:</span>
            <div v-for="artist in top_artists.data.topartists.artist" :key="artist.name">
              {{ artist.name }}<br/>
            </div> 
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import dayjs from 'dayjs';
import FloatingTextBox from '../partials/FloatingTextBox.vue';

export default {
  name: 'HomepageContact',
  components: {
    FloatingTextBox,
  },
  data: () => ({
    username: process.env.VUE_APP_LAST_FM_USER,
    api_key: process.env.VUE_APP_LAST_FM_API,
    recent_track: {},
    top_artists: {},
    ready_1: false,
    ready_2: false,
  }),
  mounted() {
    // load recently played & top artists from LastFM
    axios
      .get('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=' + this.username + '&api_key=' + this.api_key + '&limit=1&format=json')
      .then( response => { this.readyOne(response) } )
    axios
      .get('http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=' + this.username + '&api_key=' + this.api_key  + '&period=1month&limit=5&format=json')
      .then( response => { this.readyTwo(response) } )
  },
  methods: {
    readyOne: function(response) {
      this.recent_track = response;
      this.ready_1 = true;
    },
    readyTwo: function(response) {
      this.top_artists = response;
      this.ready_2 = true;
    },
    formatDate: function(old_date) {
     return dayjs(old_date).subtract(6, 'hour').format('dddd, MMMM D');
    },
    formatHour: function(old_date) {
      return dayjs(old_date).subtract(6, 'hour').format('h:mma');
    }
  },
}
</script>

<style scoped lang="scss">
  @import "../../assets/scss/_variables.scss";

  .contact {
    background: linear-gradient(45deg, $pink, $orange);
    color: $white;
  }

  .label {
    display: block;
    color: $pink;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 10px;
    font-weight: 800;
    margin: 5px 0 10px 0;
  }

  .last-played,
  .now-playing {
    position: relative;
    background: linear-gradient(rgba($white, 1), rgba($white, 0.7));
    color: $pink;
    padding: 10px 20px 10px 120px;
    box-shadow: 0 15px 30px rgba($lavender-dark, 0.2);
    font-weight: 300;
    font-size: 24px;
    border-radius: 6px;

    i {
      font-size: 12px;
      display: block;
      margin: 5px 0;
    }

    .record {
      width: 80px;
      height: 80px;
      border-radius: 50px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: -40px;
      margin-bottom: -80px;
      left: 20px;
      box-shadow: 0 15px 30px rgba($lavender-dark, 0.2);
      animation: spin 20000ms infinite;
      transform-origin: center center;
      background-color: $lavender;

      .inner {
        width: 5px;
        height: 5px;
        border-radius: 3px;
        background-color: $orange;
        position: absolute;
        z-index: 3;
      }

      .middle {
        width: 35px;
        height: 35px;
        border-radius: 20px;
        background-color: $white;
        position: absolute;
        z-index: 2;
        box-shadow: 0 15px 30px rgba($lavender-dark, 0.2);
      }

      img {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
        mix-blend-mode: overlay;
        filter: blur(2px);
      }
    }
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }

  .top-artists {
    margin-top: 30px;
    background: linear-gradient(rgba($white, 1), rgba($white, 0.7));
    color: $pink;
    padding: 20px 30px;
    box-shadow: 0 15px 30px rgba($lavender-dark, 0.2);
    font-weight: 300;
    font-size: 24px;
    border-radius: 6px;
  }
</style>