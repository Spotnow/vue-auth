import HomePage from '../components/HomePage.vue';
import Auth from '../components/Auth.vue';
import Register from '../components/Register.vue';
import Dashboard from '../components/Dashboard.vue';
import Localsignin from '../components/Localsignin.vue';
import About from '../components/About.vue';
import { authMixin } from '../mixins/authMixin';
import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store.js'

Vue.use(Router)

export const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: About },
    { path: '/auth', component: Auth, meta: { guestOnly: true }},
    { path: '/login', component: Localsignin, meta: { guestOnly: true }},
    { path: '/register', component: Register },
    { path: '/dashboard', component: Dashboard,meta: { 
        requiresAuth: true
      }, 
    }
]

export const router = new Router({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.isLoggedIn) {
        next()
        return
      }
      next('/login') 
    } else {
      next() 
    }
  })