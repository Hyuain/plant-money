<template>
  <ul class="types">
    <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
    <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
  </ul>
</template>

<script lang="js">
  export default {
    name: 'Types',
    data() {
      return {
        type: '-' // '-' 表示支出，'+' 表示收入
      }
    },
    methods: {
      selectType(type) {
        if (type !== '-' && type !== '+') {
          throw new Error('type is unknown')
        }
        this.type = type
      }
    }
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