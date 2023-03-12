<template>
  <v-table density="compact">
    <thead>
    <tr>
      <th class="text-left">
        Name
      </th>
      <th class="text-left">
        Calories
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
        v-for="item in items"
        :key="item.id"
    >
      <td>{{ item.count }}</td>
      <td>{{ item.date }}</td>
      <td>{{ item.time }}</td>
    </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  name: "HhStatistics",
  data () {
    return {
      items: [],
    }
  },
  mounted() {
    fetch('http://smart4it.ru:8080/info?sort=date,desc&size=100')
    .then(response => response.json())
    .then(json => { this.items = json.content })
  }
}

</script>

<style scoped>

</style>