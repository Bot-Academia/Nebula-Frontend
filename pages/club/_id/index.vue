<template>
  <div class="main">
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
          <b-button v-show="show.join" variant="outline-primary" class="btn show-button " @click="join">
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

          <b-nav-item v-if="selected=='Team'" active>
            Team
          </b-nav-item>
          <b-nav-item v-else @click="active('Team')">
            Team
          </b-nav-item>
        </b-nav>
      </div>
      <component
        :is="selected"
        :description="club_data.description"
        :member="admin.name"
        :name="club_data.name"
        :events="events"
      />
    </div>
  </div>
</template>

<script>
import About from '@/components/club/about.vue'
import Events from '@/components/club/events.vue'
import Members from '@/components/club/members.vue'
import Team from '@/components/club/team.vue'
import DummyClubData from '@/assets/DummyData/clubs.js'
import DummyUserData from '@/assets/DummyData/user.js'

export default {
  components: {
    About,
    Events,
    Members,
    Team
  },
  data () {
    return {
      club_data: {},
      count: 0,
      events: [],
      admin: '',
      selected: 'About',
      user: this.$store.state.user.user,
      show: {
        join: true
      }
    }
  },
  async mounted () {
    await this.$axios.$get(`/clubs/${this.$route.params.id}`)
      .then((res) => {
        this.club_data = res.data
        this.count = this.club_data.team.length

        this.$axios.$get(`/user/${this.club_data.admin}`)
          .then((res) => {
            this.admin = res.data
          })
        this.$axios.$get(`/events/${this.$route.params.id}`)
          .then((res) => {
            this.events = res.data
          })
      }).catch((error) => {
        this.club_data = DummyClubData.data[0]
        this.admin = DummyUserData
        this.events = DummyClubData.data[0].events
        console.log(this.events)
      })
    if (this.$store.state.user.token) {
      if (this.club_data.admin === this.user._id || this.club_data.members.includes(this.user._id) || this.club_data.team.includes(this.user._id)) {
        this.show.join = false
      }
    }
  },
  methods: {
    active (current) {
      this.selected = current
    },
    join () {
      if (this.$store.state.user.token) {
        this.$axios.$put(`/clubs/join/${this.$route.params.id}`, { data: 'data' })
          .then((res) => {
            this.club_data = res.data
            this.count = this.club_data.team.length
            this.show.join = false
          }).catch((error) => {
            if (error.response.status) {
              this.$bvToast.toast(error.response.data.message, {
                title: 'Error',
                variant: 'danger',
                solid: true
              })
            }
          })
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style scoped>
.main{
  margin-bottom: 150px;
}
.show-button{
  float: left;
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
