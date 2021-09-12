const formItems = [
  {
    field: 'id',
    type: 'input',
    label: 'id'
  },
  {
    field: 'no',
    type: 'input',
    label: '规则编号',
    rules: [
      { min: 3, max: 5, message: '长度在三到五之间', trigger: 'blur' }
    ],
    placeholder: '请输入用户名'
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
const formConfig = {
  loading: false,
  searchStyle: {
    marginBottom: '20px'
  },
  itemStyle: {
    padding: '5px 30px 5px 0px'
  },
  colLayout: {
    xl: 6,
    lg: 8,
    md: 24,
    sm: 24,
    xs: 24
  },
  formItems
}
export { formItems, formConfig }
