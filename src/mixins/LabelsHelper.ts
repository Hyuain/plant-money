import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export class LabelsHelper extends Vue {
  createLabel() {
    const name = window.prompt('请输入标签名');
    if (name) {
      this.$store.commit('createLabel', name);
    }
  }
}

export default LabelsHelper;