<template>
  <div>
    <div class="container">
      <Join />
      <Clubs />
    </div>
  </div>
</template>

<script>
import Join from '../components/Basic/Join.vue'
import Clubs from '../components/Basic/club.vue'

export default {
  components: {
    Join,
    Clubs
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
