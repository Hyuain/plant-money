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
  body {
  }
  #app {
    line-height: 1.5;
    font-family: $font-hei;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
  }
</style>
