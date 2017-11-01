<template>
  <div class="home-container">
    <header-container></header-container>
  </div>
</template>

<script>
import HeaderContainer from '@/components/header/HeaderContainer.vue'

export default {
  name: 'HomeContainer',
  components: {
    'header-container': HeaderContainer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
