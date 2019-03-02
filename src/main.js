import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faInstagram, faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

library.add(
  faUserSecret, 
  faTwitter,
  faInstagram,
  faGithubAlt,
  faLinkedinIn
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// AnimeJS
import VueAnime from 'vue-animejs'
Vue.use(VueAnime)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
