
const tableConfig = [
  {
    title: '用户名',
    dataIndex: 'name'
  },
  {
    title: '真实姓名',
    dataIndex: 'realname'
  },
  {
    title: '手机号码',
    dataIndex: 'cellphone'
  },
  {
    title: '状态',
    dataIndex: 'enable',
    scopedSlots: { customRender: 'status' }
  },
  {
    title: '创建时间',
    dataIndex: 'createAt',
    scopedSlots: { customRender: 'createAt' },
    sorter: true
  },
  {
    title: '更新时间',
    dataIndex: 'updateAt',
    scopedSlots: { customRender: 'updateAt' },
    sorter: true
  },
  {
    title: '操作',
    dataIndex: 'action',
    width: '150px',
    scopedSlots: { customRender: 'action' }
  }
]

export { tableConfig }
