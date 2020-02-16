import labelsModel from '@/models/labelsModel';

export default {
  // label store
  labels: labelsModel.fetch(),
  findLabel(id: string) {
    return this.labels.filter(t => t.id === id)[0];
  },
  createLabel: (name: string) => {
    const message = labelsModel.create(name);
    if (message === 'duplicated') {
      alert('标签名重复了');
    } else if (message === 'success') {
      alert('添加标签成功啦');
    }
  },
  deleteLabel: (id: string) => {
    labelsModel.delete(id);
  },
  updateLabel: (id: string, name: string) => {
    return labelsModel.update(id, name);
  },
}