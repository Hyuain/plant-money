<template>
  <label class="note">
    <span class="name">{{fieldName}}</span>
    <input type="text" v-model="value"
           :placeholder="placeHolder">
  </label>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Note extends Vue {
    @Prop() readonly value!: string;
    @Prop({required: true}) readonly fieldName!: string;
    @Prop() readonly placeHolder?: string;
  }
</script>

<style lang="scss" scoped>
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
</style>