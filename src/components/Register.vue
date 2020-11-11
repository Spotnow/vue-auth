 <template>
  <div>
    <h4>Register</h4>
    <form @submit.prevent="register">
      <label for="email" >E-Mail Address</label>
      <div>
          <input id="email" type="email" v-model="email" required>
      </div>
            <label for="name" >First Name</label>
      <div>
          <input id="first" type="text" v-model="first" required>
      </div>
            <label for="name" >Last Name</label>
      <div>
          <input id="last" type="text" v-model="last" required>
      </div>

      <label for="password">Password</label>
      <div>
          <input id="password" type="password" v-model="password" required>
      </div>

      <label for="password-confirm">Confirm Password</label>
      <div>
          <input id="password-confirm" type="password" v-model="password_confirmation" required>
      </div>

      <div>
          <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Register',
    data(){
      return {
        email : "",
        first : "",
        last : "",
        password : "",
        password_confirmation : "",
        is_admin : null
      }
    },
     methods: {
      register: function () {
        let data = {
           "user": {
              "email": this.email,
              "first_name": this.first,
              "last_name": this.last,
              "password": this.password,
            },
            "avatar": null,
            "birth_date": "",
            "nif": "",
            "telephone": ""

        };
        this.$store.dispatch('register', data)
       .then(() => this.$router.push('/'))
       .catch(err => console.log(err))
      }
    }
  }
</script>

<style scoped>
.intro-text {
  padding-top: 10px;
  padding-bottom: 100px;
  margin: auto;
}
.intro-lead-in {
  font-size: 22px;
  font-style: italic;
  line-height: 22px;
  margin: auto;
  font-family: "Montserrat", "Helvetica Neue", Helvetica, sans-serif;
}
.intro-heading {
  font-size: 50px;
  font-weight: bold;
  line-height: 50px;
  margin: auto;
  font-family: "Montserrat", "Helvetica Neue", Helvetica, sans-serif;
}
.card {
  height: 850px;
  width: 600px;
  margin: auto;
}

.card-title {
  padding-top: 20px;
  padding-bottom: 30px;
  font-size: 22px;
  font-style: italic;
  line-height: 22px;
  margin: auto;
  font-family: "Montserrat", "Helvetica Neue", Helvetica, sans-serif;
}
.form {
  justify-content: center;
  margin: auto;
}

.input {
  margin: auto;
  padding-bottom: 25px;
  max-width: 100%;
  max-height: 25%;
}

.terms {
  align-items: center;
  margin-left: 10px;
  padding-top: 0px;
}
.signup {
  margin: auto;
  padding-top: 15px;
  padding-left: 30px;
  padding-bottom: 15px;
}

.input2 {
  margin: auto;
  max-width: 100%;
  max-height: 25%;
}

.icon {
  margin-left: 5px;
}
.ancora {
  margin-left: 5px;
}
.bot2 {
  margin: auto;
}
.bot {
  align-items: center;
}
</style>