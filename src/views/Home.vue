<template>
  <Layout class-prefix="home">
    <NumberPad/>
    <Types/>
    <Note/>
    <Tags/>
  </Layout>
</template>

<script lang="ts">
  import NumberPad from '@/components/Home/NumberPad.vue';
  import Types from '@/components/Home/Types.vue';
  import Note from '@/components/Home/Note.vue';
  import Tags from '@/components/Home/Tags.vue';
  export default {
    name: 'Home',
    components: {Tags, Note, Types, NumberPad},
  };
</script>

<style lang="scss">
  .home-main {
    display: flex;
    flex-direction: column-reverse;
  }
</style>