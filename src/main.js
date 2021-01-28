import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'bootstrap';
import './assets/app.scss';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'font-awesome/css/font-awesome.min.css'
import '@fortawesome/fontawesome-free/css/all.css'



Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


new Vue({
  vuetify,
  icons: {
    iconfont: 'fa',
  },
  render: h => h(App)
}).$mount('#app')
