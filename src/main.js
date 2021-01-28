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


Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.use(VueAuthenticate, {
  providers: {
    google: {
      clientId: '196781649491-1ol69slt2k8jr1gdv2idbpi1lju5nhdo.apps.googleusercontent.com',
      redirectUri: 'http://localhost:8080/',
      name: 'google',
      url: 'http://localhost:8000/api/login/social/jwt-pair-user/',
      popupOptions: { width: 452, height: 633 },
      tokenPath: 'token'

    },
    facebook: {
      clientId: '757636608359265',
      redirectUri: 'http://localhost:8080/',
      name: 'facebook',
      url: 'http://localhost:8000/api/login/social/jwt-pair-user/',
      popupOptions: { width: 452, height: 633 },
      tokenPath: 'token'
    },

  }
});
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
var options = {
  namespace: 'vuejs__'
};

Vue.use(VueAxios, axios)


new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: h => h(App)
})

