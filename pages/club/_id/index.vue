<template>
  <div>
    <div class="container">
      <b-container class="bv-example-row">
        <b-row>
          <b-col cols="7">
            <img src="@/assets/club.png" width="100%" height="300">
          </b-col>
          <b-col><h1>{{ club_data.name }}</h1></b-col>
        </b-row>
      </b-container>
      <br>
      <b-container>
        <b-row>
          <b-col cols="7">
            <h3>Description</h3>
            {{ club_data.description }}
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      club_data: {}
    }
  },
  created () {
    this.$axios.$get(`/clubs/${this.$route.params.id}`)
      .then((res) => {
        this.club_data = res.data
        console.log(this.club_data)
      })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
