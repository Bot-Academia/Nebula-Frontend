<template>
  <div>
    <div class="container top">
      <b-row>
        <b-col
          cols="12"
          sm="12"
          md="8"
          lg="8"
          xl="8"
        >
          <img src="@/assets/club.png" width="80%" height="300">
        </b-col>
        <b-col
          cols="12"
          sm="12"
          md="4"
          lg="4"
          xl="4"
        >
          <h1>
            <img v-if="count >= 10" src="~/assets/check.svg" width="40px" height="40px" class="hero-svg">
            {{ club_data.name }}
          </h1>
          <p>
            Made on {{ club_data.startDate }}
            <br>
            Admin {{ admin.name }}
          </p>
          <b-button variant="outline-primary" class="btn">
            Join {{ club_data.name }} Club
          </b-button>
        </b-col>
      </b-row>
    </div>
    <hr class="division">
    <div class="container">
      <div>
        <b-nav tabs fill>
          <b-nav-item v-if="selected=='About'" active>
            About
          </b-nav-item>
          <b-nav-item v-else @click="active('About')">
            About
          </b-nav-item>

          <b-nav-item v-if="selected=='Events'" active>
            Events
          </b-nav-item>
          <b-nav-item v-else @click="active('Events')">
            Events
          </b-nav-item>

          <b-nav-item v-if="selected=='Members'" active>
            Members
          </b-nav-item>
          <b-nav-item v-else @click="active('Members')">
            Members
          </b-nav-item>

          <b-nav-item v-if="selected=='Calendar'" active>
            Calendar
          </b-nav-item>
          <b-nav-item v-else @click="active('Calendar')">
            Calendar
          </b-nav-item>
        </b-nav>
      </div>
      <component
        :is="selected"
        :description="club_data.description"
        :member="admin.name"
      />
    </div>
  </div>
</template>

<script>
import About from '@/components/club/about.vue'
import Events from '@/components/club/events.vue'
import Members from '@/components/club/members.vue'
import Calendar from '@/components/club/calendar.vue'

export default {
  components: {
    About,
    Events,
    Members,
    Calendar
  },
  data () {
    return {
      club_data: {},
      count: 0,
      admin: '',
      selected: 'About'
    }
  },
  created () {
    this.$axios.$get(`/clubs/${this.$route.params.id}`)
      .then((res) => {
        this.club_data = res.data
        this.count = this.club_data.team.length
        console.log(this.club_data)
        this.$axios.$get(`/user/${this.club_data.admin}`)
          .then((res) => {
            this.admin = res.data
            console.log(this.admin)
          })
      })
  },
  methods: {
    active (current) {
      this.selected = current
    }
  }
}
</script>

<style scoped>
.btn{

}
p{
  text-align: left;
  font-size: 18px;
  font-weight: 600;
}
.container {
  margin: 0 auto;
  text-align: center;
}
h1{
  text-align: left;
}
.top{
  margin-top: 25px;
}
img{
  border-radius: 5px;
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
