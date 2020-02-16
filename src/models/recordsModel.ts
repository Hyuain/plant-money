import clone from '@/lib/clone';

const localStorageKeyName = 'records';

const recordsModel = {
  data: [] as RecordItem[],
  fetch() {
    this.data = JSON.parse(localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.data;
  },
  create(record: RecordItem) {
    const recordCopy: RecordItem = clone(record);
    recordCopy.createdAt = new Date();
    this.data.push(recordCopy);
    this.save();
  },
  save() {
    localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export default recordsModel;