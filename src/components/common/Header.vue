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

    <div class="header-search">
      <input class="header-search-input js-search-input js-disable-on-dialog" type="text" autocomplete="off" autocorrect="off" spellcheck="false" value="">
      <span class="header-search-icon icon-lg icon-search light js-search-icon"></span>
      <span class="header-search-icon header-search-icon-close icon-lg icon-close light js-close-icon js-search-close hide"></span>
      <a class="header-search-icon header-search-icon-open icon-lg icon-external-link light js-open-button js-open-search-page hide" href="#"></a>
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
@font-face {
  font-family: trellicons;
  src: url('./trellicons.woff') format('woff');
}

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

.header-search {
    float: left;
    margin: 0 8px 0 0;
    position: relative;
    z-index: 1
}


input[type=text].header-search-input {
    background-color: rgba(255,255,255,.3);
    border-radius: 3px;
    border: none;
    color: rgba(255,255,255,.5);
    float: left;
    font-size: 13px;
    height: 30px;
    margin: 0;
    min-height: 30px;
    padding-right: 30px;
    padding-left: 8px;
    line-height: 19px;
    -webkit-transition: width 150ms;
    transition: width 150ms;
    width: 180px;
    z-index: 1
}

input[type=text].header-search-input::-ms-clear {
    display: none
}

input[type=text].header-search-input:hover {
    background-color: rgba(255,255,255,.4)
}

input[type=text].header-search-input.focus,input[type=text].header-search-input.focus:hover {
    background-color: #fff;
    box-shadow: none;
    color: #4d4d4d;
    padding-right: 54px
}

.header-search-icon {
    cursor: pointer;
    position: absolute;
    font-size: 1pc;
    right: 0;
    top: 0;
    -webkit-transition: background 85ms,color 85ms;
    transition: background 85ms,color 85ms;
    z-index: 2;
}
.icon-search:before {
    content: "\e94d";
}
</style>
