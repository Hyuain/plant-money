<template>
  <Layout class-prefix="home">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <Note :value.sync="record.note"/>
    <Tags :data-source.sync="customTags" :value.sync="record.tags"/>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import NumberPad from '@/components/Home/NumberPad.vue';
  import Types from '@/components/Home/Types.vue';
  import Note from '@/components/Home/Note.vue';
  import Tags from '@/components/Home/Tags.vue';
  import recordsModel from '@/models/recordsModel';
  import tagsModel from '@/models/tagsModel';

  @Component({
    components: {Tags, Note, Types, NumberPad}
  })
  export default class Home extends Vue {
    customTags = ['衣', '食', '住', '行'];
    record: RecordItem = {tags: [], note: '', type: '-', amount: 0};
    records = recordsModel.fetch();
    tags = tagsModel.fetch();

    saveRecord() {
      const recordCopy: RecordItem = recordsModel.clone(this.record);
      recordCopy.createdAt = new Date();
      this.records.push(recordCopy);
    }

    @Watch('records')
    onRecordsChange() {
      recordsModel.save(this.records);
    }
  }
</script>

<style lang="scss">
  .home-main {
    display: flex;
    flex-direction: column-reverse;
  }
</style>