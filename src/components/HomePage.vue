<template>
  <div>
    <h1>Hello!</h1>
    <p>What you want to do?</p>
    <div>
    <router-link to="/auth"><button><v-btn id="signin" class="ma-2" tile><v-icon dark left>mdi-account-arrow-right</v-icon>Sign in</v-btn></button></router-link>
    </div>
    <br>
    <div>
    <router-link to="/register"><v-btn id="signup" class="ma-2" tile><v-icon dark left>mdi-account-details</v-icon>Sign up</v-btn></router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Homepage'
    }
</script>
<style scoped>
#signin {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  width: 250px;
  height: 50px;
  background-color: #fff;
  color: #000;
  cursor:pointer;
}

#signup {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  width: 250px;
  height: 50px;
  background-color: #fff;
  color: 000;
  cursor:pointer;
}

</style>