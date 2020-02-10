const localStorageKeyName = 'labels';

type Label = {
  id: string
  name: string
}

type LabelsModel = {
  data: Label[]
  fetch: () => Label[]
  create: (name: string) => 'success' | 'duplicated'
  save: () => void
}

const labelsModel: LabelsModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(localStorage.getItem('labels') || '[]');
    return this.data;
  },
  create(name) {
    const names = this.data.map(item => item.name);
    if (names.indexOf(name) >= 0) {
      return 'duplicated';
    }
    this.data.push({id: name, name: name});
    this.save();
    return 'success';
  },
  save() {
    localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export default labelsModel;