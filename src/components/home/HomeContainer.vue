<template>
  <div class="home-container">
    <header-container></header-container>
    <board-list></board-list>
  </div>
</template>

<script>
import HeaderContainer from '@/components/header/HeaderContainer.vue'
import BoardList from '@/components/home/BoardList.vue'

export default {
  name: 'HomeContainer',
  components: {
    'header-container': HeaderContainer,
    'board-list': BoardList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
