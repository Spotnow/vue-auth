import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";


Vue.use(Vuex);

export const authMixin = {
  methods: {
    /* eslint-disable no-console */
    authenticate_google: function (provider) {
      this.$auth
        .authenticate(provider, { provider: "google-oauth2" })
        .then((resp) => {
          //console.log(resp);
          const token = resp.data.token;
          const refresh = resp.data.refresh;
          const user = resp.data.email;
          localStorage.setItem("token", token);
          localStorage.setItem("refresh", refresh);
          localStorage.setItem("user", user);
          // Add the following line:
          axios.defaults.headers.common["Authorization"] = token;
          this.$store.commit("auth_success", token, refresh, user);
        })
        .then(() => {
          this.$router.push('/dashboard');
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    authenticate_facebook: function (provider) {
      this.$auth
        .authenticate(provider, { provider: "facebook" })
        .then(function (resp) {
          const token = resp.data.token;
          const refresh = resp.data.refresh;
          const user = resp.data.email;
          localStorage.setItem("token", token);
          localStorage.setItem("refresh", refresh);
          localStorage.setItem("user", user);
          // Add the following line:
          axios.defaults.headers.common["Authorization"] = token;
          this.$store.commit("auth_success", token, refresh, user);
        })
        .then(() => {
          this.$router.push('/dashboard');
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    /* eslint-enable no-console */
  },
};

export default new Vuex.Store({
  authMixin,
  state: {
    status: "",
    token: localStorage.getItem("access") || "",
    refresh: localStorage.getItem("refresh") || "",
    user: ""
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, token, refresh, user) {
      state.status = "success";
      state.token = token;
      state.refresh = refresh;
      state.user = user
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
      state.refresh = "";
      state.user = "";
    },
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "http://localhost:8000/db/api/access/token/",
          data: user,
          method: "POST",
        })
          .then((resp) => {
            const token = resp.data.access;
            const refresh = resp.data.refresh;
            const user = resp.data.user
            localStorage.setItem("token", token);
            localStorage.setItem("refresh", refresh);
            // Add the following line:
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", token, refresh, user);
            resolve(resp);
          })
          .catch((err) => {
            commit("auth_error");
            localStorage.removeItem("token");
            localStorage.removeItem("refresh");
            reject(err);
          });
      });
    },
    // social_login({ commit }, data) {
    //   return new Promise((resolve, reject) => {
    //     commit("auth_request");
    //     axios({
    //       url: "http://localhost:8000/db/api/verify/token/",
    //       data: data.token,
    //       method: "POST",
    //     })
    //       .then((resp) => {
    //         if(resp=={}){
    //         const token = data.token;
    //         const refresh = data.refresh;
    //         localStorage.setItem("token", token);
    //         localStorage.setItem("refresh", refresh);
    //         // Add the following line:
    //         axios.defaults.headers.common["Authorization"] = token;
    //         commit("auth_success", token, refresh);
    //         resolve(resp);
    //         }
    //       })
    //       .catch((err) => {
    //         commit("auth_error");
    //         localStorage.removeItem("token");
    //         localStorage.removeItem("refresh");
    //         reject(err);
    //       });
    //   });
    // },

    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "http://localhost:8000/db/api/client_registration/",
          data: user,
          method: "POST",
        })
          .then(resp => {

            const token = resp.data.token
            const user = resp.data.user
            localStorage.setItem('token', token)
            // Add the following line:
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error', err)
            localStorage.removeItem('token')
            reject(err)
          })
      });
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit("logout");
        localStorage.removeItem("token");
        localStorage.removeItem("refresh");
        localStorage.removeItem("user");
        localStorage.removeItem("vue-authenticate.vueauth_token");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
  },
});
