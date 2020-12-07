<template>
  <div id="box" class="-shadow">
    <h4 class="title">
      {{ name }}
    </h4>
    <div class="post">
      <span class="eyebrow">
        {{ details }}
      </span>
    </div>

    <br>
  </div>
</template>

<script>

export default {
  props: ['details', 'name', 'location', 'status', 'id', 'link']
}
</script>

<style scoped>
#box {
  padding: 20px;
  margin-bottom: 24px;
  border: 4px solid #17a2b8 ;
  border-radius: 5px;
  transition: all 0.2s linear;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.19);
}
#box:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.title {
  margin: 0;
  color: black;
  text-align: left;
  font-weight: 500;
  font-size: 24px;
}
a {
  text-decoration: none;
}
#switch{
    display: block;
    margin: 0 auto;
}
.post{
   padding: 0px 20px 20px 20px;
  margin-bottom: 24px;
  border: 3px solid #17a2b8 ;
  border-radius: 5px;
  text-align: left;
}
h4{
    text-align: center;
}
#time{
    float: right;
}
h6{
    text-align: center;
}
button{
    margin: 5px;
}
</style>
