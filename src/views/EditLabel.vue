<template>
  <Layout>
    <div>
      <Icon name="left"/>
      <span>编辑标签</span>
    </div>
    <Note field-name="标签名" place-holder="请输入标签名"/>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import labelsModel from '@/models/labelsModel';
  import Note from '@/components/Home/Note.vue';
  @Component({
    components: {Note}
  })
  export default class EditLabel extends Vue {
    created() {
      const {id} = this.$route.params;
      labelsModel.fetch();
      const labels = labelsModel.data;
      const label = labels.filter(t => t.id === id)[0];
      if (label) {
        console.log(label);
      } else {
        this.$router.replace('/404');
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>