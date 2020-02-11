import createId from '@/lib/createId';

const localStorageKeyName = 'labels';

type LabelsModel = {
  data: Label[]
  fetch: () => Label[]
  create: (name: string) => 'success' | 'duplicated'
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
  delete: (id: string) => void
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
    const id = createId().toString();
    this.data.push({id, name: name});
    this.save();
    return 'success';
  },
  update(id, name) {
    const idList = this.data.map(item => item.id);
    const index = idList.indexOf(id);
    if (index >= 0) {
      const names = this.data.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        return 'duplicated';
      } else {
        this.data[index].id = name;
        this.data[index].name = name;
        this.save();
        return 'success';
      }
    } else {
      return 'not found';
    }
  },
  delete(id: string) {
    let index = -1;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id) {
        index = i;
        break;
      }
    }
    this.data.splice(index, 1);
    this.save();
  },
  save() {
    localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export default labelsModel;