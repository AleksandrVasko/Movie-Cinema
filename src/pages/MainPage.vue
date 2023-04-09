<template>
  <div class="main-page">
    <h1>
      Онлайн кинотеатр
    </h1>
    <button type="button" class="btn btn-outline-light" @click="this.$router.push({ name: 'films' })">
      Перейти к фильмам
    </button>
  </div>
</template>
  
<script>
</script>

<style lang="scss" scoped>
  .main-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    h1 {
      color: #ffffff;
      font-size: 70px;
      margin-bottom: 20px;
    }
  }
</style>
  