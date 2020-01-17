<template>
  <div id="home">
    <div class="main">
      Home.vue
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">

  export default {
    name: 'Home',
  };
</script>

<style lang="scss" scoped>
  #home{
    display: flex;
    flex-direction: column;
    border: 1px solid green;
    height: 100vh;
    .main{
      flex-grow: 1;
      overflow: auto;
    }
  }
</style>