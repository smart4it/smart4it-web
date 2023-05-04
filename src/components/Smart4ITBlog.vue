<template>
  <div class="d-flex align-center flex-column">
    <v-card width="400" v-for="article in article" :key="article.id">
      <v-card-item>
        <v-card-title>{{ article.title }}</v-card-title>

<!--        <v-card-subtitle>{{ article.preview }}</v-card-subtitle>-->
      </v-card-item>

      <v-card-text>
        {{ article.preview }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Smart4ITBlog",
  data () {
    return {
      article: [],
    }
  },
  mounted() {
    fetch('http://smart4it.ru:10081/article')
    .then(response => response.json())
    .then(json => { this.article = json.content })
  }
}

</script>

<style scoped>

</style>