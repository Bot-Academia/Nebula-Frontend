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
          cols="12"
          sm="6"
          md="6"
          lg="4"
          xl="3"
        >
          <div>
            <b-card
              overlay
              :img-src="require('../../assets/' + club.image)"
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
      clubs: [
        {
          image: 'club.png',
          name: 'CodeClub'
        },
        {
          image: 'club.png',
          name: 'Music Club'
        },
        {
          image: 'club.png',
          name: 'Ai Circle'
        },
        {
          image: 'club.png',
          name: 'Drama Club'
        }
      ]
    }
  }
}
</script>

<style scoped>
.clubs{
    margin-top: 25px;
}
.heading{
    text-align: left;
}
</style>
