import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    records: [] as RecordItem[]
  },
  mutations: {
    fetchRecords(state) {
      state.records =  JSON.parse(localStorage.getItem('records') || '[]') as RecordItem[];
    },
    createRecord(state,record: RecordItem){
      const recordCopy: RecordItem = clone(record);
      recordCopy.createdAt = new Date();
      state.records.push(recordCopy);
      console.log(state.records);
      store.commit('saveRecords',state)
    },
    saveRecords(state){
      localStorage.setItem('records', JSON.stringify(state.records));
    }
  },
  actions: {},
  modules: {}
});

export default store