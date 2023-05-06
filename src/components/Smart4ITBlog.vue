<template>
  <v-card
      max-width="800"
      class="mx-auto"
  >

    <v-container>
      <v-card
          class="mt-4 mx-auto"
          max-width="800"
          variant="outlined"
          v-for="article in articles" :key="article.id"
      >
        <v-card-title>{{ article.title }}</v-card-title>
        <v-card-text>{{ article.preview }}</v-card-text>

        <v-card-actions>
          <router-link
              to="/blog/:id"
              custom
              v-slot="{ navigate }"
          >
            <v-btn icon="mdi-arrow-right"
                   @click="navigate"
                   role="link"></v-btn>
          </router-link>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "Smart4ITBlog",
  data () {
    return {
      articles: [],
    }
  },
  mounted() {
    fetch('http://smart4it.ru:10081/articles')
    .then(response => response.json())
    .then(json => { this.articles = json.content })
  }
}

</script>

<style scoped>

</style>