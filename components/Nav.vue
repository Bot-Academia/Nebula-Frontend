<template>
  <b-navbar class="nav">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <h1>
          Nebula
        </h1>
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav{
    background-color: #7977F1;
}
h1{
    font-size: 25px;
    color: black;
    font-weight: 500;
}
</style>
