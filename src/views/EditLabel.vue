<template>
  <Layout>
    <div class="nav-bar">
      <Icon class="left-icon" name="left" @click="goBack"/>
      <span class="title">编辑标签</span>
      <span class="right-icon"></span>
    </div>
    <div class="form-wrapper">
      <FormItem :value="label.name" @update:value="updateLabel" field-name="标签名" place-holder="请输入标签名"/>
    </div>
    <div class="button-wrapper">
      <Button @click="deleteLabel">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import FormItem from '@/components/FormItem.vue';
  import Button from '@/components/Button.vue';

  @Component({
    components: {Button, FormItem},
    computed: {
      currentLabel(){
        return this.$store.state.currentLabel
      }
    }
  })
  export default class EditLabel extends Vue {
    label?: Label = undefined;

    created() {
      const id = this.$route.params.id;
      this.$store.commit('fetchLabels');
      this.$store.commit('setCurrentLabel', id);
      if (!this.currentLabel) {
        this.$router.replace('/404');
      }
    }

    updateLabel(name: string) {
      if (this.label) {
        // store.updateLabel(this.label.id, name);
      }
    }

    deleteLabel() {
      if (this.label) {
        // store.deleteLabel(this.label.id);
      }
      this.$router.push('/labels');
    }

    goBack() {
      this.$router.push('/labels');
    }

  }
</script>

<style lang="scss" scoped>
  .nav-bar {
    text-align: center;
    font-size: 16px;
    padding: 12px 16px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
    }
    .left-icon {
      width: 20px;
      height: 20px;
    }
    .right-icon {
      width: 20px;
      height: 20px;
    }
  }
  .form-wrapper {
    background: #fff;
    margin-top: 8px;
  }
  .button-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 36px;
  }
</style>