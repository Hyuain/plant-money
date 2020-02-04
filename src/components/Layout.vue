<template>
  <div class="layout">
    <div class="main" :class="classPrefix && `${classPrefix}-main`">
      <slot></slot>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Layout',
    props: ['classPrefix']
  };
</script>

<style lang="scss" scoped>
  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    .main {
      flex-grow: 1;
      overflow: auto;
    }
  }
</style>