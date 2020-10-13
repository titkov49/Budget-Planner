export const initialLst = [
  {
    id: Date.now(),
    date: Date.now(),
    name: 'Income1223234424324',
    type: 'income',
    value: 1000
  },
  {
    id: Date.now()+1,
    date: Date.now(),
    name: 'Spending123445678',
    type: 'spending',
    value: 1000
  },
  {
    id: Date.now()-1,
    date: Date.now(),
    name: 'AAAAAAAAAAA',
    type: 'income',
    value: 1000
  }
]

export const options = [
  {
    label: 'By Date',
    value: 'initial'
  }, 
  {
    label: 'By Value',
    value: 'value'
  },
  {
    label: 'By Name',
    value: 'name'
  }
];