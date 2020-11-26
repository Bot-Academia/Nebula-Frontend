<template>
  <div class="join">
    <b-container>
      <b-row>
        <b-col
          cols="12"
          sm="12"
          md="12"
          lg="6"
          xl="6"
          class="content"
        >
          <h1 class="slogan">
            Discover Clubs <br>
            of your University!
          </h1>
          <nuxt-link to="/signup">
            <b-button variant="outline-primary" class="btn">
              Join Nebula
            </b-button>
          </nuxt-link>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="6" xl="6">
          <img src="~/assets/hero-svg.svg" width="400px" height="400px" class="hero-svg">
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
.slogan{
    width: 100%;
    text-align: left;
    font-size: 6.5vh;
}
.join{
    margin-top: 55px;
}
.btn{
    text-align: left;
    align-content: start;
    display: flex;
  justify-content: left;
  align-items: center;
  text-align: center;
  margin: 25px 0px;
}
.content{
    margin-top: 60px;
}
@media (max-width: 380px){
  .hero-svg{
    width: 250px;
    height: 250px;
  }
}
</style>
