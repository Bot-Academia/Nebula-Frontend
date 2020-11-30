<template>
  <div class="jumbotron container">
    <h1><b>Login</b></h1>
    <br>
    <form class="container">
      <b-form-input v-model="user.email" placeholder="E-Mail" :type="'email'" :state="null" required />
      <br>
      <b-form-input v-model="user.password" placeholder="Password" :type="'password'" :state="null" required />
      <br>
      <b-button variant="success" @click="login">
        <i class="fa fa-sign-in" aria-hidden="true" /> Login
      </b-button>
    </form>
    <br><br>
    <p>
      New to Nebula?<nuxt-link to="/signup">
        Sign up now
      </nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      await this.$axios.$post('/user/login', this.user).then(
        (res) => {
          this.$store.state.user.token = res.token
          this.$store.state.user.user = res.user
          this.$axios.setToken(res.token, 'Bearer')
          localStorage.setItem('user', JSON.stringify(res.user))
          localStorage.setItem('token', res.token)

          this.$router.push('/')
        }
      ).catch((error) => {
        if (error.response.status) {
          this.$bvToast.toast(error.response.data.message, {
            title: 'Error',
            variant: 'danger',
            solid: true
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.jumbotron{
	background: rgba(0, 0, 0, 0.75);
    width: 35%;
    height: 50%;
    margin-top: 3%;
    color: white;
}
.jumbotron button{
    float: right;
}
@media (max-width: 900px){
    .jumbotron{
        width: 50%;
    }
}
@media (max-width: 400px){
    .jumbotron{
        width: 70%;
    }
}
</style>
