<template>
  <Layout class-prefix="home">
    <div class="number-pad">
      <div class="display">100</div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="ok">OK</button>
        <button class="zero">0</button>
        <button>.</button>
      </div>
    </div>
    <ul class="types">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
    <label class="note">
      <span class="name">备注</span>
      <input type="text" placeholder="在这里输入备注">
    </label>
    <div class="tags">
      <div class="new">
        <button>新增标签</button>
      </div>
      <ul class="current">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
    </div>
  </Layout>
</template>

<script lang="ts">
  export default {
    name: 'Home',
  };
</script>

<style lang="scss">
  .home-main {
    display: flex;
    flex-direction: column-reverse;
  }
</style>

<style lang="scss" scoped>
  @import "../assets/style/helper.scss";
  .tags {
    flex-grow: 1;
    font-size: 14px;
    padding: 16px;
    display: flex;
    flex-direction: column-reverse;
    .current {
      display: flex;
      flex-wrap: wrap;
      li {
        background-color: #d9d9d9;
        height: 24px;
        line-height: 24px;
        padding: 0 16px;
        border-radius: 12px;
        margin-right: 12px;
        margin-top: 4px;
      }
    }
    .new {
      padding-top: 16px;
      button {
        background: transparent;
        border: none;
        color: #999;
        border-bottom: 1px solid;
        padding: 0 2px;
      }
    }
  }
  .note {
    background: #f5f5f5;
    font-size: 14px;
    padding-left: 16px;
    display: flex;
    align-items: center;
    .name {
      padding-right: 16px;
    }
    input {
      height: 64px;
      flex-grow: 1;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }
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
  .number-pad {
    .display {
      @extend %inner-shadow;
      font-size: 36px;
      font-family: Consolas, monospace;
      padding: 8px 16px;
      text-align: right;
    }
    .buttons {
      @extend %clear-fix;
      button {
        width: 25%;
        height: 64px;
        background: transparent;
        border: none;
        &.ok {
          height: 128px;
          float: right;
        }
        &.zero {
          width: 50%;
        }
        $bg: #f2f2f2;
        &:nth-child(1) {
          background: $bg;
        }
        &:nth-child(2), &:nth-child(5) {
          background: darken($bg, 4%);
        }
        &:nth-child(3), &:nth-child(6), &:nth-child(9) {
          background: darken($bg, 4*2%);
        }
        &:nth-child(4), &:nth-child(7), &:nth-child(10) {
          background: darken($bg, 4*3%);
        }
        &:nth-child(8), &:nth-child(11), &:nth-child(13) {
          background: darken($bg, 4*4%);
        }
        &:nth-child(14) {
          background: darken($bg, 4*5%);
        }
        &:nth-child(12) {
          background: darken($bg, 4*6%);
        }
      }
    }
  }
</style>