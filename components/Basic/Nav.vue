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
          <b-nav-item>
            <nuxt-link to="/signup" class="link">
              <b-button>  Signup</b-button>
            </nuxt-link>
          </b-nav-item>
          <b-nav-item href="#">
            <nuxt-link to="/login" class="link">
              <b-button> Login </b-button>
            </nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <b-avatar></b-avatar>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>



<style scoped>
.link{
  color: white;
  text-decoration: none;
}
</style>
