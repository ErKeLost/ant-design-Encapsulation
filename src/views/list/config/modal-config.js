const formItems = [
  {
    field: 'no',
    type: 'input',
    label: '规则编号',
    rules: [
      { min: 3, max: 5, message: '长度在三到五之间', trigger: 'blur' }
    ],
    placeholder: '请输入用户名',
    isHidden: false
  },
  {
    field: 'description',
    type: 'input',
    label: '描述',
    rules: [],
    placeholder: '请输入密码'
  },
  {
    field: 'createAt',
    type: 'datepicker',
    label: '创建时间',
    rules: [],
    datePickerOptions: {
      placeholder: ['请选择创建时间', '请选择技术日期创建时间'],
      type: 'date'
    }
  },
  {
    field: 'callNo',
    type: 'input',
    label: '调用次数',
    rules: [],
    placeholder: '请选择姓名'
  },
  {
    field: 'status',
    type: 'select',
    label: '状态',
    options: [
      {
        label: '正常',
        value: 0
      },
      {
        label: '异常',
        value: 1
      }
    ]
  }
]
const modalConfig = {
  itemStyle: {
    padding: '5px 10px 5px 10px'
  },
  colLayout: {
    span: 24
  },
  modalTitle: '新建',
  buttonTitle: '新建',
  formItems
}
export { modalConfig }
