<template>
  <Layout class-prefix="home">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <div class="notes">
      <FormItem :value.sync="record.note" field-name="备注" place-holder="在这里输入备注"/>
    </div>
    <Labels :data-source="labels" :value.sync="record.labels"/>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import NumberPad from '@/components/Home/NumberPad.vue';
  import Types from '@/components/Home/Types.vue';
  import FormItem from '@/components/FormItem.vue';
  import Labels from '@/components/Home/Labels.vue';
  import recordsModel from '@/models/recordsModel';
  import labelsModel from '@/models/labelsModel';

  @Component({
    components: {Labels, FormItem, Types, NumberPad}
  })
  export default class Home extends Vue {
    record: RecordItem = {labels: [], note: '', type: '-', amount: 0};
    records = recordsModel.fetch();
    labels = labelsModel.fetch();

    saveRecord() {
      recordsModel.create(this.record);
    }

    @Watch('records')
    onRecordsChange() {
      recordsModel.save();
    }
  }
</script>

<style lang="scss">
  .home-main {
    display: flex;
    flex-direction: column-reverse;
    .notes {
      padding: 12px 0;
    }
  }
</style>