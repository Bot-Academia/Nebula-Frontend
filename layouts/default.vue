<template>
  <div>
    <Nav />
    <Nuxt keep-alive />
    <Footer />
  </div>
</template>
<script>
import Nav from '../components/Basic/Nav.vue'
import Footer from '../components/Basic/Footer'
export default {
  components: {
    Nav,
    Footer
  },
  mounted () {
    const token = localStorage.getItem('token')
    if (token) {
      this.$store.state.user.user = JSON.parse(localStorage.getItem('user'))
      this.$store.state.user.token = localStorage.getItem('token')
    }
  }
}
</script>
<style>

      body {
        min-height: 100%;
        display: flex;
        flex-direction: column;
      }
html {
  scroll-behavior: smooth;
        min-height: 100%;
        min-width: 100%;
        position: relative;
        max-width: 100%;
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
