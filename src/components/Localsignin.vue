 <template>
 <div>
   <form class="login" @submit.prevent="login">
     <h1>Sign in</h1>
     <label>Email</label>
     <input required v-model="email" type="email" placeholder="Name"/>
     <label>Password</label>
     <input required v-model="password" type="password" placeholder="Password"/>
     <hr/>
     <button type="submit">Login</button>
   </form>
 </div>
</template>

<script>
  export default {
    data(){
      return {
        email : "",
        password : ""
      }
    },
    methods: {
      login: function () {
        let email = this.email 
        let password = this.password
        this.$store.dispatch('login', { email, password })
       .then(() => this.$router.push('/dashboard'))
       .catch(err => console.log(err))
      }
    }
  }
</script>

<style scoped>
.intro-text {
  padding-top: 10px;
  padding-bottom: 100px;
  margin:auto;
}

 .intro-lead-in {
  font-size: 22px;
  font-style: italic;
  line-height: 22px;
  margin:auto;
  font-family: "Montserrat", "Helvetica Neue", Helvetica, sans-serif;
}

.intro-heading {
  font-size: 50px;
  font-weight: bold;
  line-height: 50px;
 margin:auto;
  font-family: "Montserrat", "Helvetica Neue", Helvetica, sans-serif;
}

.cardlogin {
  margin: auto;
  height: 400px;
  width:800px;
}

.card-title {
  padding-top:50px;
  padding-bottom:30px;
  font-size: 22px;
  font-style: italic;
  line-height: 22px;
  margin: auto;
  font-family: "Montserrat", "Helvetica Neue", Helvetica, sans-serif;
}
.form {
  justify-content: center;
  margin:auto;
}
.input {
  margin: auto;
  padding-bottom: 25px;
  max-width: 60%;
  max-height: 25%;
}

.input2 {
  margin: auto;
  max-width: 60%;
  max-height: 25%;
}

.signup {
margin: auto;
padding-top: 15px;
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