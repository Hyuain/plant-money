import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createId from '@/lib/createId';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    records: [] as RecordItem[],
    labels: [] as Label[],
    currentLabel: undefined
  },
  mutations: {
    fetchRecords(state) {
      state.records = JSON.parse(localStorage.getItem('records') || '[]');
    },
    createRecord(state, record: RecordItem) {
      const recordCopy: RecordItem = clone(record);
      recordCopy.createdAt = new Date();
      state.records.push(recordCopy);
      console.log(state.records);
      store.commit('saveRecords', state);
    },
    saveRecords(state) {
      localStorage.setItem('records', JSON.stringify(state.records));
    },
    fetchLabels(state) {
      state.labels = JSON.parse(localStorage.getItem('labels') || '[]');
    },
    createLabel(state, name: string) {
      const names = state.labels.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        alert('标签名重复了');
      }
      const id = createId().toString();
      state.labels.push({id, name: name});
      store.commit('saveLabels');
      alert('添加标签成功啦');
    },
    saveLabels(state) {
      localStorage.setItem('labels', JSON.stringify(state.labels));
    }
  },
  actions: {},
  modules: {}
});

export default store;