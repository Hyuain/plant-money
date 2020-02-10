<template>
  <Layout>

    编辑标签
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import labelsModel from '@/models/labelsModel';

  @Component
  export default class EditLabel extends Vue {
    created() {
      const {id} = this.$route.params;
      labelsModel.fetch();
      const labels = labelsModel.data;
      const label = labels.filter(t => t.id === id)[0];
      if(label){
        console.log(label);
      } else {
        this.$router.replace('/404')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>