import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import labelsModel from '@/models/labelsModel';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

window.labels = labelsModel.fetch();
window.findLabel = (id: string) => {
  return window.labels.filter(t => t.id === id)[0];
};
window.createLabel = (name: string) => {
  const message = labelsModel.create(name);
  if (message === 'duplicated') {
    alert('标签名重复了');
  } else if (message === 'success') {
    alert('添加标签成功啦');
  }
};
window.deleteLabel = (id: string) => {
  labelsModel.delete(id);
};
window.updateLabel = (id: string, name: string) => {
  return labelsModel.update(id, name);
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
