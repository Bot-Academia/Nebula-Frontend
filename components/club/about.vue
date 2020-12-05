<template>
  <div>
    <h1>
      About {{ name }} club
    </h1>
    <p>
      {{ description }}
    </p>

    <hr>

    <h1>
      Social Media Links
    </h1>
    <p>
      Social Media links
    </p>
  </div>
</template>

<script>
export default {
  props: ['description', 'name']
}
</script>

<style scoped>
h1{
  text-align: left;
  font-size: 24px;
  margin-top: 10px;
}
p{
  text-align: left;
  font-size: 18px;
  margin-top: 10px;
}
</style>
