<template>
  <div class="jumbotron container">
    <h1><b>Sign Up</b></h1>
    <br />
    <form class="container">
      <b-form-input
        v-model="user.name"
        placeholder="Name"
        :type="'text'"
        :state="null"
        required
      />
      <br />
      <b-form-input
        v-model="user.email"
        placeholder="E-Mail"
        :type="'email'"
        :state="null"
        required
      />
      <br />
      <b-form-input
        placeholder="Password"
        :type="'password'"
        :state="null"
        required
      />
      <br />
      <b-form-input
        v-model="user.password"
        placeholder="Confirm Password"
        :type="'password'"
        :state="null"
        required
      />
      <br />
      <b-form-input
        v-model="user.entryno"
        placeholder="Entry No"
        :type="'text'"
        :state="null"
        required
      />
      <br />
    </form>
    <button class="btn btn-success" @click="signUp">
      <i class="fa fa-user-plus" aria-hidden="true" /> Sign-Up
    </button>
    <br /><br />
    <br /><br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        entryno: "",
      },
    };
  },
  methods: {
    async signUp() {
      await this.$axios
        .$post("/user/signup", this.user)
        .then((res) => {
          this.$store.state.user.token = res.token;
          this.$store.state.user.user = res.user;
          this.$axios.setToken(res.token, "Bearer");
          localStorage.setItem("user", JSON.stringify(res.user));
          localStorage.setItem("token", res.token);

          this.$router.push("/");
        })
        .catch((error) => {
          if (error.response.status) {
            this.$bvToast.toast(error.response.data.message, {
              title: "Error",
              variant: "danger",
              solid: true,
            });
          }
        });
    },
  },
};
</script>

<style scoped>
.jumbotron {
  background: rgba(0, 0, 0, 0.75);
  width: 35%;
  height: 20%;
  margin-top: 3%;
  margin-top: 3%;
  color: white;
  padding-bottom: -900px;
  margin-bottom: 100px;
}
.jumbotron button {
  float: right;
}
@media (max-width: 900px) {
  .jumbotron {
    width: 50%;
  }
}
@media (max-width: 400px) {
  .jumbotron {
    width: 70%;
  }
}
</style>
