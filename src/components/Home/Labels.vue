<template>
  <div class="labels">
    <div class="new">
      <button @click="createLabel">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="label in labels" :key="label.id"
          :class="{selected: selectedLabelsId.indexOf(label.id) >= 0}"
          @click="toggle(label.id)">{{label.name}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import {Component, Prop} from 'vue-property-decorator';
  import {mixins} from 'vue-class-component';
  import LabelsHelper from '@/mixins/LabelsHelper';

  @Component
  export default class Labels extends mixins(LabelsHelper) {
    @Prop() readonly value!: Label[];
    selectedLabelsId: string[] = this.value.map(item => item.id);

    labels() {
      return this.$store.state.labels;
    }

    created() {
      this.$store.commit('fetchLabels');
    }

    toggle(id: string) {
      const index = this.selectedLabelsId.indexOf(id);
      console.log(index);
      if (index >= 0) {
        this.selectedLabelsId.splice(index, 1);
      } else {
        this.selectedLabelsId.push(id);
      }
      const selectedLabels: Label[] = this.$store.state.labels.filter((item: Label) => this.selectedLabelsId.indexOf(item.id) >= 0);
      this.$emit('update:value', selectedLabels);
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