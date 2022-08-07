import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './assets/css/custom.css';
import VAnimateCss from 'v-animate-css';

Vue.use(VAnimateCss);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

