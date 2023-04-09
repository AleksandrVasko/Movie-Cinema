<template>
    <div class="films-page container">
      <h2>Выбери фильм на свой вкус</h2>
      <films-list :films="films" />
    </div>
  </template>
  
  <script>
  import FilmsList from '../components/FilmList.vue'
  import films from '../backend/film'
  
  
  export default {
    components: { FilmsList },
    data() {
      return {
        films
      }   
    }
  }
  </script>
  
  <style lang="scss" scoped>
  h2 {
    font-size: 40px;
    color:#ffffff;
    margin-bottom: 30px;
  }
  </style>
  