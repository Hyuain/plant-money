<template>
  <Layout class-prefix="home">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <Note :value.sync="record.note" field-name="备注" place-holder="在这里输入备注"/>
    <Labels :data-source.sync="customLabels" :value.sync="record.labels"/>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import NumberPad from '@/components/Home/NumberPad.vue';
  import Types from '@/components/Home/Types.vue';
  import Note from '@/components/Home/Note.vue';
  import Labels from '@/components/Home/Labels.vue';
  import recordsModel from '@/models/recordsModel';
  import labelsModel from '@/models/labelsModel';

  @Component({
    components: {Labels, Note, Types, NumberPad}
  })
  export default class Home extends Vue {
    customLabels = ['衣', '食', '住', '行'];
    record: RecordItem = {labels: [], note: '', type: '-', amount: 0};
    records = recordsModel.fetch();
    labels = labelsModel.fetch();

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