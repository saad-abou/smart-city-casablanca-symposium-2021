import Vue from 'vue'
import App from './App.vue'
import 'babel-polyfill'
import vuetify from './plugins/vuetify';
import 'bootstrap';
import './assets/app.scss';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'font-awesome/css/font-awesome.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from "./router"
import AOS from 'aos'
import 'aos/dist/aos.css'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
  config: { id: "UA-197596079-1" }
});
 
Vue.use(PerfectScrollbar)



window.axios = require('axios');



Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//fr
Vue.component('accueil', require('./components/fr/accueil.vue').default);
Vue.component('agenda', require('./components/fr/agenda.vue').default);
Vue.component('contact', require('./components/fr/contact.vue').default);
Vue.component('inscription', require('./components/fr/inscription.vue').default);
Vue.component('propos', require('./components/fr/propos.vue').default);
Vue.component('thematique', require('./components/fr/thematique.vue').default);
Vue.component('timer', require('./components/fr/timer.vue').default);
Vue.component('speakers', require('./components/fr/speakers.vue').default);
Vue.component('axe2', require('./components/fr/axe2.vue').default);
Vue.component('sponsors', require('./components/fr/sponsors.vue').default);
Vue.component('juin9', require('./components/fr/9juin.vue').default);
Vue.component('juin10', require('./components/fr/10juin.vue').default);
Vue.component('scientifique', require('./components/fr/scientifique.vue').default);

//en
Vue.component('accueil_en', require('./components/en/accueil_en.vue').default);
Vue.component('agenda_en', require('./components/en/agenda_en.vue').default);
Vue.component('contact_en', require('./components/en/contact_en.vue').default);
Vue.component('inscription_en', require('./components/en/inscription_en.vue').default);
Vue.component('propos_en', require('./components/en/propos_en.vue').default);
Vue.component('thematique_en', require('./components/en/thematique_en.vue').default);
Vue.component('timer_en', require('./components/en/timer_en.vue').default);
Vue.component('axe2_en', require('./components/en/axe2_en.vue').default);
Vue.component('juin9en', require('./components/en/9juin_en.vue').default);
Vue.component('juin10en', require('./components/en/10juin_en.vue').default);
Vue.component('sponsors_en', require('./components/en/sponsors_en.vue').default);
Vue.component('speakers_en', require('./components/en/speakers_en.vue').default);
Vue.component('scientifique_en', require('./components/en/scientifique_en.vue').default);


//countdown
import VueCountdown from '@chenfengyuan/vue-countdown';
Vue.component(VueCountdown.name, VueCountdown);

new Vue({
  vuetify,
  router,
  icons: {
    iconfont: ['fa','mdi'],
  },
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
