<template>
    <div class="films-layout">
      <router-view></router-view>
      <MainHeader />
    </div>
</template>
  
<script>
import MainHeader from '../components/MainHeader.vue'

export default {
  components: { 
    MainHeader, 
  }
}
</script>
  