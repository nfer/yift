<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

#app {
  color: #333;
  font: 14px "Helvetica Neue",Arial,Helvetica,sans-serif;
  line-height: 18px;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.iframe-input,button,input:not([type=file]),textarea {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    background-color: #E2E4E6;
    border: 1px solid #CDD2D4;
    border-radius: 3px;
    display: block;
    margin-bottom: 9pt;
    padding: 7px
}
</style>
