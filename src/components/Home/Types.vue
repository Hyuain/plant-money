<template>
  <ul class="types">
    <li class="selected">支出</li>
    <li>收入</li>
  </ul>
</template>

<script lang="ts">
  export default {
    name: 'Types'
  };
</script>

<style lang="scss" scoped>
  .types {
    background: #c4c4c4;
    display: flex;
    text-align: center;
    font-size: 24px;
    li {
      width: 50%;
      line-height: 64px;
      height: 64px;
      &.selected {
        border-bottom: 4px solid;
      }
    }
  }

</style>