<template>
  <div class="number-pad">
    <div class="display">{{display}}</div>
    <div class="buttons">
      <button @click="inputNumber">1</button>
      <button @click="inputNumber">2</button>
      <button @click="inputNumber">3</button>
      <button @click="remove">删除</button>
      <button @click="inputNumber">4</button>
      <button @click="inputNumber">5</button>
      <button @click="inputNumber">6</button>
      <button @click="clear">清空</button>
      <button @click="inputNumber">7</button>
      <button @click="inputNumber">8</button>
      <button @click="inputNumber">9</button>
      <button class="ok" @click="ok">OK</button>
      <button class="zero" @click="inputNumber">0</button>
      <button @click="inputNumber">.</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class NumberPad extends Vue {
    @Prop() readonly value!: number;
    display = this.value.toString();

    inputNumber(event: MouseEvent | TouchEvent) {
      const button = (event.target as HTMLButtonElement);
      const input = button.textContent!;
      if (this.display.length === 16) return;
      if (input === '.' && this.display.indexOf('.') > 0) return;
      if (this.display === '0') {
        if (input === '0') {
          return;
        } else if (input === '.') {
          this.display += input;
        } else {
          this.display = input;
        }
        return;
      }
      this.display += input;
    }

    remove() {
      this.display = this.display.slice(0, -1);
      if (this.display === '') {
        this.display = '0';
      }
    }

    clear() {
      this.display = '0';
    }

    ok() {
      this.$emit('update:value', this.display);
      this.$emit('submit');
      this.display = '0';
    }
  }

</script>

<style lang="scss" scoped>
  @import "../../assets/style/helper";
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