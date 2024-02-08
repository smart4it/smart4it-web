<template>
  <v-app-bar color="primary"
             density="comfortable">
    <v-row no-gutters>
      <v-col cols ="1" class="ml-4 mr-4">
        <v-app-bar-title>
          <v-icon icon="mdi-circle-slice-4"/>
          smart4it
        </v-app-bar-title>
      </v-col>
      <v-col>
        <v-btn to="/blog">Блог</v-btn>
        <v-btn to="/">Статистика</v-btn>
        <v-btn href="http://185.178.45.174:3000/d/db7c78b0-857c-47fa-9e24-8b4e7b341d86/kolichestvo-java-vakansij?orgId=1&from=1675206825000&to=1707419774175&theme=light">
          График количества вакансий
        </v-btn>
        <v-btn to="/dictionary/experience">Справочники</v-btn>
      </v-col>

    </v-row>
  </v-app-bar>
</template>


<script setup>
//
</script>
