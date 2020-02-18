<template>
  <div class="labels">
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="label in dataSource" :key="label.id"
          :class="{selected: selectedLabels.indexOf(label) >= 0}"
          @click="toggle(label)">{{label.name}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component({
  })
  export default class Labels extends Vue {
    @Prop() readonly dataSource: string[] | undefined;
    @Prop() readonly value!: string[];
    selectedLabels: string[] = this.value;

    toggle(label: string) {
      const index = this.selectedLabels.indexOf(label);
      if (index >= 0) {
        this.selectedLabels.splice(index, 1);
      } else {
        this.selectedLabels.push(label);
      }
      this.$emit('update:value', this.selectedLabels);
    }

    create() {
      const name = window.prompt('请输入标签名');
      if (name) {
        // store.createLabel(name);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .labels {
    background: #fff;
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
        &.selected {
          background-color: #bababa;
        }
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
</style>