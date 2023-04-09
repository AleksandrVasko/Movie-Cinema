<template>
    <div class="film-card">
      <img
        :src="film.img"
        :alt="film.title"
      >
      <p class="rating">{{ film.rating }}</p>
      <p class="title">{{ film.title }}</p>
      <router-link
        :to="{ name: 'filmPage', params: { id: film.id } }"
        class="more-info"
      >
        Подробнее о фильме
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      film: {
        type: Object
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .film-card {
    position: relative;
    img {
      object-fit: cover;
      border-radius: 10px;
      width: 1160px;
      height: 600px;
    }
    .title {
      position: absolute;
      margin-bottom: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      color: #ffffff;
      height: 100px;
      background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 90%);
      font-weight: 700;
      padding: 20px;
      font-size: 30px;
      border-radius: 0 0 10px 10px;
    }
    .rating {
      position: absolute;
      right: 0;
      top: 0;
      background-color: #EB5804;
      width: 100px;
      height: 50px;
      margin-bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      font-weight: 700;
      font-size: 20px;
      border-radius: 0 10px 0 10px;
      opacity: 0.8;
    }
    .more-info {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.6);
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 700;
      font-size: 30px;
      text-decoration: none;
      opacity: 0;
      transition: all 0.2s ease;
      &:hover, &:focus {
        opacity: 1;
      }
    }
  }
  </style>
  