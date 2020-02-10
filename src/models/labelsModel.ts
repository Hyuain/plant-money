const localStorageKeyName = 'labels';

type Label ={
  id: string;
  name: string
}

type LabelsModel = {
  data: string[]
  fetch: () => string[]
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
    if (this.data.indexOf(name) >= 0) {
      return 'duplicated';
    }
    this.data.push(name);
    this.save();
    return 'success';
  },
  save() {
    localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export default labelsModel;