// import Vue from "vue";
// import Vuex from "vuex";
// import axios from "axios";
// import store from "../store/store.js";

// export const authMixin = {
//   data(){
//     return {
//       token: "",
//     }
//   },
//   methods: {
//     checkToken: function(provider, redirect) {
//       axios
//         .post("http://localhost:8000/db/api/verify/token/", {
//           token: localStorage.getItem("token"),
//         })
//         .then((response) => {
//           console.log(response);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     },
//     authenticate_google(provider) {
//       this.$auth
//         .authenticate("google", { provider: "google-oauth2" })
//         .then((resp) => (this.token = resp.data.token),
//           self.SocialLogin(this.token)
//         )
//         .catch(function(error) {
//           console.log(error);
//         });
//     },
//     SocialLogin(response) {
//       axios({
//         url: "http://localhost:8000/db/api/verify/token/",
//         data: response,
//         method: "POST",
//       })
//         .then((resp) => {
//           console.log(resp.data);
//         })
//         .catch((err) => {
//           console.log({ err: err });
//         });
//     },

//     authenticate_facebook: function(provider) {
//       this.$auth
//         .authenticate("facebook", { provider: "facebook" })
//         .then(function(response) {
//           console.log("Works!");
//         })
//         .catch(function(error) {
//           console.log(error);
//         });
//     },
//   },
// };
