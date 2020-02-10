<template>
  <Layout class-prefix="home">
    <NumberPad :value.sync="record.amount"/>
    <Types :value.sync="record.type"/>
    <Note :value.sync="record.note"/>
    <Tags :data-source.sync="customTags" :value.sync="record.tags"/>
    {{record}}
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import NumberPad from '@/components/Home/NumberPad.vue';
  import Types from '@/components/Home/Types.vue';
  import Note from '@/components/Home/Note.vue';
  import Tags from '@/components/Home/Tags.vue';

  type Record = {
    tags: string[]
    note: string
    type: string
    amount: number
  }

  @Component({
    components: {Tags, Note, Types, NumberPad}
  })
  export default class Home extends Vue {
    customTags = ['衣', '食', '住', '行'];
    record: Record = {tags: [], note: '', type: '-', amount: 0};


  }
</script>

<style lang="scss">
  .home-main {
    display: flex;
    flex-direction: column-reverse;
  }
</style>