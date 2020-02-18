<template>
  <Layout class-prefix="labels">
    <div>
      <div class="labels">
        <router-link class="label" :to="`/labels/edit/${label.id}`" v-for="label in labels" :key="label.id"><span>{{label.name}}</span>
          <Icon name="right"/>
        </router-link>
      </div>
    </div>
    <div class="button-wrapper">
      <Button @click="createLabel">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
  import {Component} from 'vue-property-decorator';
  import {mixins} from 'vue-class-component';
  import Button from '@/components/Button.vue';
  import LabelsHelper from '@/mixins/LabelsHelper';

  @Component({
    components: {Button},
    computed: {
      labels(){
        return this.$store.state.labels
      }
    }
  })
  export default class Labels extends mixins(LabelsHelper) {

    created() {
      this.$store.commit('fetchLabels');
    }

  }
</script>

<style lang="scss" scoped>
  .labels {
    background-color: #FFF;
    font-size: 16px;
    padding-left: 16px;
    .label {
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
  .button-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 36px;
  }
</style>