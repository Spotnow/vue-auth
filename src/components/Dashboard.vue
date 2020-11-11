<template>
  <div>
    <h1>Dashboard</h1>
    <h4>Welcome! You logged in successfully!</h4>
    <br />
    <h5>This Container is protected by auth</h5>
    <br />
    <br />
    <div>
      <router-link to="/"
        ><v-btn id="home" class="ma-2" tile
          ><v-icon dark left>mdi-home</v-icon>Home</v-btn
        ></router-link
      >
    </div>
    <br />
    <div>
      <router-link to="/about"
        ><v-btn id="about" class="ma-2" tile
          ><v-icon dark left>mdi-information</v-icon>About</v-btn
        ></router-link
      >
    </div>
    <br />
    <div>
      <router-link to="/login"
        ><v-btn id="login" class="ma-2" tile
          ><v-icon dark left>mdi-account-arrow-right</v-icon>Login</v-btn
        ></router-link
      >
    </div>
    <br />
    <div v-if="isLoggedIn">
      <router-link to="/login"
        ><v-btn id="logout" @click="logout" class="ma-2" tile
          ><v-icon dark left>mdi-account-arrow-left</v-icon>Logout</v-btn
        ></router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "Dashboard",
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
    created: function() {
      this.$http.interceptors.response.use(undefined, function(err) {
        return new Promise(function(resolve, reject) {
          if (
            err.status === 401 &&
            err.config &&
            !err.config.__isRetryRequest
          ) {
            this.$store.dispatch("logout");
          }
          throw err;
        });
      });
    },
  },
};
</script>
<style scoped>
#home {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  width: 250px;
  height: 50px;
  background-color: #fff;
  color: #000;
  cursor: pointer;
}

#about {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  width: 250px;
  height: 50px;
  background-color: #fff;
  color: 000;
  cursor: pointer;
}

#login {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  width: 250px;
  height: 50px;
  background-color: #fff;
  color: #000;
  cursor: pointer;
}

#logout {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  width: 250px;
  height: 50px;
  background-color: #fff;
  color: 000;
  cursor: pointer;
}
</style>
