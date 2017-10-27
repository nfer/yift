<template>
  <div class="header">
    <a class="header-logo">
      <div class="header-logo-loading"></div>
    </a>
    <div class="header-boards-button">
      <a class="header-btn header-boards js-boards-menu" href="#">
        <span class="header-btn-icon icon-lg icon-board light"></span>
        <span class="header-btn-text">看板</span>
      </a>
    </div>

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

.header-logo-loading {
  background-image: url('./header-loading-logo.gif');
  background-size: 18px 18px;
  display: none;
  height: 18px;
  left: 2px;
  position: absolute;
  top: 6px;
  width: 18px;
}

.header-btn {
  border-radius: 3px;
  display: block;
  text-decoration: none;
  float: left;
  position: relative;
  height: 30px;
  -webkit-transition: .1s ease;
  transition: .1s ease;
  background: rgba(255,255,255,.3);
  color: #f3f3f3;
  line-height: 30px;
  margin-right: 8px;
  min-width: 30px;
  padding: 0;
  user-select: none;
  font-weight: 700;
}

.header-boards {
  padding-left: 26px;
}

.header-btn-icon {
  font-size: 1pc;
  line-height: 30px;
  position: absolute;
  top: 0;
  left: 0
}

.icon-lg {
  height: 2pc;
  font-size: 20px;
  line-height: 30px;
  width: 30px
}

.icon-lg {
  display: inline-block;
  font-family: trellicons;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  color: #999
}

.icon-lg.light {
  color: #fff;
  text-decoration: none;
}

.icon-board:before {
  content: "\e908";
}

.header-btn-text {
  padding: 0 8px;
}
</style>
