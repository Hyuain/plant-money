<template>
  <Layout class-prefix="home">
    <NumberPad/>
    <Types/>
    <Note/>
    <Tags :data-source="tags"/>
  </Layout>
</template>

<script>
  import NumberPad from '@/components/Home/NumberPad.vue';
  import Types from '@/components/Home/Types.vue';
  import Note from '@/components/Home/Note.vue';
  import Tags from '@/components/Home/Tags.vue';

  export default {
    name: 'Home',
    components: {Tags, Note, Types, NumberPad},
    data() {
      return {
        tags: ['衣', '食', '住', '行']
      }
    }
  };
</script>

<style lang="scss">
  .home-main {
    display: flex;
    flex-direction: column-reverse;
  }
</style>