type RecordItem = {
  labels: Label[]
  note: string
  type: string
  amount: number
  createdAt?: Date
}

type Label = {
  id: string
  name: string
}

type LabelsModel = {
  data: Label[]
  fetch: () => Label[]
  create: (name: string) => 'success' | 'duplicated'
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
  delete: (id: string) => void
  save: () => void
}

interface Window {
  store: {
    labels: Label[]
    findLabel: (id: string) => Label | undefined
    createLabel: (name: string) => void
    deleteLabel: (id: string) => void
    updateLabel: LabelsModel['update']
    records: RecordItem[]
    createRecord: (record: RecordItem) => void
  }
}