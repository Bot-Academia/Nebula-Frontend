<template>
  <div>
    <Nav />
    <Display />
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Display from '../components/Display.vue'
export default {
  name: 'HomePage',

  components: {
    Nav,
    Display
  }
}
</script>
