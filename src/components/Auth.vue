<template>
  <div>
    <h1>Authentication</h1>
    <h4>Welcome! Choose the option that better suits you!</h4>
    <br />
    <div>
      <router-link to="/login">
        <v-btn id="signin" class="ma-2" tile>
          <v-icon dark left>mdi-email-send</v-icon>Sign in with Email
        </v-btn>
      </router-link>
    </div>
    <br />
    <div>
      <v-btn id="google" class="ma-2" tile @click="authenticate_google('google')">
        <v-icon dark left>mdi-google</v-icon>Sign in with Google
      </v-btn>
    </div>
    <br />
    <div id="app">
      <v-btn id="facebook" class="ma-2" tile @click="authenticate_facebook('facebook')">
        <v-icon dark left>mdi-facebook</v-icon>Sign in with Facebook
      </v-btn>
    </div>
  </div>
</template>
<script>
import { authMixin } from "../store/store.js";
export default {
  name: "Auth",
  data() {
    return {
      token: "",
    };
  },
  mixins: [authMixin],
  methods: {
    // authenticate_google(provider) {
    //   this.$auth
    //     .authenticate("google", { provider: "google-oauth2" })
    //     .then((response) => {
    //       let res = response.data.token;
    //       this.token = res;
    //       Promise.resolve(res);
    //       alert("token: " + this.token);
    //     })
    //     .catch((err) => {
    //       console.log("not working");
    //        Promise.reject(err);
    //     });
    // },

    SocialLogin() {
      const authCode = this.$gAuth.signIn()
      // const response = this.$http({
      //   url: 'localhost:8000/db/api/verify/',
      //   data: ,
      //   method: "POST",
      // })
      //   .then((resp) => {
      //     console.log(resp.data);
      //   })
      //   .catch((err) => {
      //     console.log({ err: err });
      //   });
    },

    handleAuth() {
      this.authenticate_google("google");

      this.SocialLogin();
    },
  },
  // methods: {
  //   login_google: function() {
  //     // let prop = "google"
  //     // let clientId =
  //     //   "196781649491-1ol69slt2k8jr1gdv2idbpi1lju5nhdo.apps.googleusercontent.com";
  //     let code =
  //       "4/3wHL5lJLWquoEeFaikZaIKpOoc8G6v6z4hvLtsOALfr5IjDhNP-ENz_hlgvdRWKaIBysevw3xDLyeNPVX8sD508";
  //     let provider = "google-oauth2";
  //     let redirectUri = "http://localhost:8080/";
  //     this.$store
  //       .dispatch("auth_google", {
  //         provider: "google-oauth2",
  //         code:
  //           "4/3wHL5lJLWquoEeFaikZaIKpOoc8G6v6z4hvLtsOALfr5IjDhNP-ENz_hlgvdRWKaIBysevw3xDLyeNPVX8sD508",
  //         clientId:
  //           "196781649491-1ol69slt2k8jr1gdv2idbpi1lju5nhdo.apps.googleusercontent.com",
  //         redirectUri: "http://localhost:8080/"

  //       })
  //       .then(() => this.$router.push("/dashboard"))
  //       .catch((err) => console.log(err));
  //   },
  // },
};
</script>
<style>
#facebook {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  width: 250px;
  height: 50px;
  background-color: #4267b2;
  color: #fff;
  cursor: pointer;
}

#google {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  width: 250px;
  height: 50px;
  background-color: #db4437;
  color: #fff;
  cursor: pointer;
}

#signin {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  width: 250px;
  height: 50px;
  background-color: #f4b400;
  color: #fff;
  cursor: pointer;
}
</style>
