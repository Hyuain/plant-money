import recordsModel from '@/models/recordsModel';

export default {
  // record store
  records: recordsModel.fetch(),
  createRecord: (record: RecordItem) => {
    recordsModel.create(record);
  },
}