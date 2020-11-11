import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const authMixin = {
  methods: {
     /* eslint-disable no-console */
    authenticate_google: function(provider) {
      this.$auth
        .authenticate("google", { provider: "google-oauth2" })
        .then((resp) => {
          const token = resp.data.token;
          const refresh = resp.data.refresh;
          localStorage.setItem("token", token);
          localStorage.setItem("refresh", refresh);
          // Add the following line:
          axios.defaults.headers.common["Authorization"] = token;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    authenticate_facebook: function(provider) {
      this.$auth
        .authenticate("facebook", { provider: "facebook" })
        .then(function(resp) {
          const token = resp.data.token;
          const refresh = resp.data.refresh;
          console
          localStorage.setItem("token", token);
          localStorage.setItem("refresh", refresh);
          // Add the following line:
          axios.defaults.headers.common["Authorization"] = token;
        })
        .catch(function(error) {
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
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, token, refresh) {
      state.status = "success";
      state.token = token;
      state.refresh = refresh;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
      state.refresh = "";
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
            localStorage.setItem("token", token);
            localStorage.setItem("refresh", refresh);
            // Add the following line:
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", token, refresh);
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
    auth_google({commit}, {provider, code, clientId, redirectUri}){
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "http://localhost:8000/api/login/social/jwt-pair-user/",
          data: { provider, code, clientId, redirectUri},
          method: "POST",
        })
          .then((resp) => {
            const token = resp.data.access;
            const refresh = resp.data.refresh;
            localStorage.setItem("token", token);
            localStorage.setItem("refresh", refresh);
            // Add the following line:
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", token, refresh);
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
        });
        //.then(resp => console.log(resp));

        //   const token = resp.data.token
        //   const user = resp.data.user
        //   localStorage.setItem('token', token)
        //   // Add the following line:
        //   axios.defaults.headers.common['Authorization'] = token
        //   commit('auth_success', token, user)
        //   resolve(resp)
        // .catch(err => {
        //   commit('auth_error', err)
        //   localStorage.removeItem('token')
        //   reject(err)
        // })
      });
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit("logout");
        localStorage.removeItem("token");
        localStorage.removeItem("refresh");
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
