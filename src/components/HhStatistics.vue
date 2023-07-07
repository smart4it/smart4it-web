<template>

  <div class="righted" style="text-align: right">
    <iframe src="http://213.226.125.39:3000/d-solo/d3dc323f-575c-4130-a158-c8f83150d196/kolichestvo-vakansij-java?orgId=1&from=1675609200000&to=1688733793315&theme=light&panelId=1" width="450" height="200" frameborder="1"></iframe>
  </div>


  <v-table density="compact">
    <thead>
    <tr>
      <th class="text-left">
        Дата
      </th>
      <th class="text-left">
        Время
      </th>
      <th class="text-left">
        Количество вакансий
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
        v-for="item in items"
        :key="item.id"
    >
      <td>{{ item.date }}</td>
      <td>{{ item.time }}</td>
      <td>{{ item.count }}</td>

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