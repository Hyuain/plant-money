const localStorageKeyName = 'tags';

type TagsModel = {
  data: string[]
  fetch: () => string[]
  create: (name: string) => 'success' | 'duplicated'
  save: () => void
}

const tagsModel: TagsModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(localStorage.getItem('tags') || '[]');
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

export default tagsModel;