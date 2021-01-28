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
      <v-btn
        id="google"
        class="ma-2"
        tile
        @click="authenticate_google('google')"
      >
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
  // methods: {
  //   // authenticate_google(provider) {
  //   //   const oauth2 = {provider:"google-oauth2"}
  //   //   this.$store.dispatch('authenticate_google', {provider, oauth2})
  //   //     .then(() => this.$router.push('/dashboard'))
  //   //     .catch(err => console.log(err))
  //   // },

  //   // authenticate_facebook(provider) {
  //   //   const oauth2 = {provider:"facebook"}
  //   //   this.$store.dispatch('authenticate_facebook', {provider, oauth2})
  //   //     .then(() => this.$router.push('/dashboard'))
  //   //     .catch(err => console.log(err))
  //   // }

  //     //     .then((response) => {
  //     //       let res = response.data.token;
  //     //       this.token = res;
  //     //       Promise.resolve(res);
  //     //       alert("token: " + this.token);
  //     //     })
  //     //     .catch((err) => {
  //     //       console.log("not working");
  //     //        Promise.reject(err);
  //     //     });
  //     // },
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
