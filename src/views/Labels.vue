<template>
  <Layout class-prefix="labels">
    <div>
      <ol class="labels">
        <li v-for="label in labels" :key="label.id"><span>{{label.name}}</span>
          <Icon name="right"/>
        </li>
      </ol>
    </div>
    <div class="create-button-wrapper">
      <button class="create-button" @click="create">新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import labelsModel from '@/models/labelsModel';

  labelsModel.fetch();

  @Component
  export default class Labels extends Vue {
    labels = labelsModel.data;

    create() {
      const name = window.prompt('请输入标签名');
      if (name) {
        const message = labelsModel.create(name);
        if (message === 'duplicated') {
          alert('标签名重复了');
        } else if (message === 'success') {
          alert('添加标签成功啦');
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .labels {
    background-color: #FFF;
    font-size: 16px;
    padding-left: 16px;
    > li {
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #e6e6e6;
      svg {
        width: 20px;
        height: 20px;
        color: #333;
        margin-right: 16px;
      }
    }
  }
  .create-button {
    background: #767676;
    color: #fff;
    border-radius: 4px;
    border: none;
    padding: 4px 16px;
    &-wrapper {
      text-align: center;
      padding: 16px;
      margin-top: 36px;
    }
  }
</style>