<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">
        <nuxt-link to="/" class="link">
          Nebula
        </nuxt-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="!$store.state.user.token">
            <b-button>
              <nuxt-link class="link" to="/signup">
                Signup
              </nuxt-link>
            </b-button>
          </b-nav-item>
          <b-nav-item v-if="!$store.state.user.token">
            <b-button>
              <nuxt-link class="link" to="/login">
                Login
              </nuxt-link>
            </b-button>
          </b-nav-item>
          <b-nav-item v-if="$store.state.user.token">
            <b-avatar :text="$store.state.user.user.name" variant="warning" />
          </b-nav-item>
          <b-nav-item v-if="$store.state.user.token">
            <b-button @click="logout">
              <nuxt-link class="link" to="/">
                Logout
              </nuxt-link>
            </b-button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    logout: function logout () {
      this.$store.state.user.token = null
      this.$store.state.user.user = null
    }
  }
}
</script>

<style scoped>
.link{
  color: white;
  text-decoration: none;
}
</style>
