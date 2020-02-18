import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createId from '@/lib/createId';

Vue.use(Vuex);

type RootState = {
  records: RecordItem[]
  labels: Label[]
  currentLabel?: Label
}

const store = new Vuex.Store({
  state: {
    records: [],
    labels: [],
    currentLabel: undefined
  } as RootState,
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
      } else {
        const id = createId().toString();
        state.labels.push({id, name: name});
        store.commit('saveLabels');
        alert('添加标签成功啦');
      }
    },
    saveLabels(state) {
      localStorage.setItem('labels', JSON.stringify(state.labels));
    },
    updateLabel(state, payload: { id: string, name: string }) {
      const {id, name} = payload;
      const idList = state.labels.map(item => item.id);
      const index = idList.indexOf(id);
      if (index >= 0) {
        const names = state.labels.map(item => item.name);
        if (names.indexOf(name) >= 0) {
          alert('标签名重复了');
        } else {
          state.labels[index].name = name;
          store.commit('saveLabels');
        }
      }
    },
    deleteLabel(state, id: string) {
      let index = -1;
      for (let i = 0; i < state.labels.length; i++) {
        if (state.labels[i].id === id) {
          index = i;
          break;
        }
      }
      if (index >= 0) {
        state.labels.splice(index, 1);
        store.commit('saveLabels');
      } else {
        alert('删除失败')
      }
    },
    setCurrentLabel(state, id: string) {
      state.currentLabel = state.labels.filter(item => item.id === id)[0];
    }
  },
  actions: {},
  modules: {}
});

export default store;