<template>
  <div id="app">
    <router-view></router-view>
    <hr>
    <div>

    </div>
  </div>
</template>
<style lang="scss">
  @import "src/assets/style/reset.scss";
  @import "src/assets/style/helper.scss";
  #app {
    line-height: 1.5;
    font-family: $font-hei;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    height: 100vh;
    overflow: hidden;
    background-color: #f5f5f5;
  }
</style>
