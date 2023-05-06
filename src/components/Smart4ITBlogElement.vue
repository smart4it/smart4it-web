<template>
  <div>
    <p class="text-left">
      {{ article.title }}
    </p>

    <p class="text-left">
      {{ article.preview }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Smart4ITBlogElement",
  data () {
    return {
      article: [],
    }
  },
  mounted() {
    fetch('http://smart4it.ru:10081/articles/688ff00e-4aae-474c-abf8-ce070891a6e8')
    .then(response => response.json())
    .then(json => { this.article = json })
  }
}

</script>

<style scoped>

</style>