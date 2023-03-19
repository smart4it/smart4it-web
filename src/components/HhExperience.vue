<template>
  <v-table density="compact">
    <thead>
    <tr>
      <th class="text-left">
        Идентификатор
      </th>
      <th class="text-left">
        Наименование
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
        v-for="item in items"
        :key="item.id"
    >
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
    </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  name: "HhExperience",
  data () {
    return {
      items: [],
    }
  },
  mounted() {
    fetch('http://smart4it.ru:8080/dictionary/experience')
    .then(response => response.json())
    .then(json => { this.items = json })
  }
}

</script>

<style scoped>

</style>