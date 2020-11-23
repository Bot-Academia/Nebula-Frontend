<template>
  <div class="jumbotron container">
    <h1><b>Sign Up</b></h1>
    <br>
    <form class="container">
      <b-form-input placeholder="Name" :type="'text'" :state="null" required />
      <br>
      <b-form-input placeholder="E-Mail" :type="'email'" :state="null" required />
      <br>
      <b-form-input placeholder="Password" :type="'password'" :state="null" required />
      <br>
      <b-form-input placeholder="Confirm Password" :type="'password'" :state="null" required />
      <br>
      <b-form-input placeholder="Entry No" :type="'text'" :state="null" required />
      <br>
    </form>
    <button class="btn btn-success">
      <i class="fa fa-user-plus" aria-hidden="true" /> Sign-Up
    </button>
    <br><br>
    <br><br>
  </div>
</template>

<script>
export default {

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
