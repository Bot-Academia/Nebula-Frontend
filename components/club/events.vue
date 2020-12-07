<template>
  <div>
    <p>
      Events
    </p>
    <div class="wrapper">
      <ul>
        <li v-for="(item,i) in events" :key="i">
          <div>
            <Card
              :id="i"
              :details="item.details"
              :name="item.name"
              :location="item.location"
              :status="item.status"
              :start-date="item.startDate"
              :end-date="item.endDate"
              :link="item.link"
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Card from '@/components/eventCard.vue'
export default {
  components: {
    Card
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    events: Array
  }
}
</script>

<style scoped>
ul{
  list-style: none;
  width: 90%;
  margin: auto;
}
.wrapper {
  text-align: center;
}
.wrapper ul {
  display: inline-block;
  margin: 0;
  padding: 0;
  zoom:1;
  *display: inline;
}
.wrapper li {
  padding: 2px 5px;
}
</style>
