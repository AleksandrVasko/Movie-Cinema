<template>
    <div class="film-list">
      <film-card
        class="film-card"
        v-for="film in films"
        :key="film.id"
        :film="film"
      />
    </div>
  </template>
  
  <script>
  import FilmCard from './FilmCard.vue'
  
  export default {
    props: {
      films: {
        type: Array,
        default: () => []
      }
    },
    components: { FilmCard }
  }
  </script>
  
  <style lang="scss" scoped>
  .film-card {
    margin-bottom: 40px;
  }
  </style>
  