<template>
  <div class="clubs">
    <h3 class="heading">
      Clubs in your University
    </h3>
    <br>
    <b-container class="bv-example-row">
      <b-row>
        <b-col
          v-for="club in clubs"
          :key="club.name"
          class="tag"
          cols="12"
          sm="6"
          md="6"
          lg="4"
          xl="3"
        >
          <div>
            <b-card
              overlay
              :img-src="require('../../assets/club.png')"
              img-alt="Card Image"
              text-variant="black"
              :title="club.name"
            />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
  </b-row>
  </b-container>

  </div>
</template>

<script>

export default {
  data () {
    return {
      clubs: []
    }
  },
  created () {
    this.$axios.$get('/clubs')
      .then((res) => {
        this.clubs = res.data
        console.log(this.clubs)
      })
  }
}
</script>

<style scoped>
.clubs{
    margin: 60px 0px 100px 0px;
}
.heading{
    text-align: left;
}
.tag{
  margin-top: 25px;
}
</style>
