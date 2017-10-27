<template>
  <div class="header">
    <a class="header-logo"></a>
    <div class="header-boards"></div>
    <div class="header-user"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background: #026AA7;
  overflow: hidden;
  padding: 5px 8px;
  z-index: 10;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
  position: relative;
  height: 30px;
}

.header-logo {
  display: block;
  position: absolute;
  top: 5px;
  left: 50%;
  bottom: 0;
  margin-left: -40px;
  height: 30px;
  width: 80px;
  text-align: center;
  -webkit-transition: .1s ease;
  transition: .1s ease;
  z-index: 2;

  background-image: url('./header-logo.png');
  background-position: top right;
  background-repeat: no-repeat;
  background-size: cover;

  opacity: .5;
}
</style>
