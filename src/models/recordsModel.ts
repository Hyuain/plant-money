const localStorageKeyName = 'records';

const recordsModel = {
  clone(data: RecordItem[] | RecordItem){
    return JSON.parse(JSON.stringify(data));
  },
  fetch() {
    return JSON.parse(localStorage.getItem('records') || '[]') as RecordItem[];
  },
  save(data: RecordItem[]) {
    localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }
};

export default recordsModel;