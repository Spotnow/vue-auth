import Vue from 'vue'
import App from './App.vue'
import { router} from './router/router';
import VueAuthenticate from 'vue-authenticate'
import VueAxios from 'vue-axios'
import axios from 'axios';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from './plugins/vuetify';
import store from './store/store.js'
import Axios from 'axios'
import GAuth from 'vue-google-oauth2'


Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
var options = {
  namespace: 'vuejs__'
};

Vue.use(VueAxios, axios)
Vue.use(VueAuthenticate, {
  providers: {
    google: {
      clientId: '196781649491-1ol69slt2k8jr1gdv2idbpi1lju5nhdo.apps.googleusercontent.com',
      redirectUri: 'http://localhost:8080/',
      name: 'google',
      url: 'http://localhost:8000/api/login/social/jwt-pair-user/',
    },
    facebook: {
      clientId: '757636608359265',
      redirectUri: 'http://localhost:8080/',
      name: 'facebook',
      url: 'http://localhost:8000/api/login/social/jwt-pair-user/',
    },

  }
});

const gauthOption = {
  clientId: '196781649491-1ol69slt2k8jr1gdv2idbpi1lju5nhdo.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GAuth, gauthOption)

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: h => h(App)
})

