const formItems = [
  {
    field: 'name',
    type: 'input',
    label: '用户名',
    rules: [],
    placeholder: '请输入用户名'
  },
  {
    field: 'realname',
    type: 'input',
    label: '真实姓名',
    rules: [],
    placeholder: '请输入真实姓名'
  },
  {
    field: 'cellphone',
    type: 'input',
    label: '电话号码',
    rules: [],
    placeholder: '请输入电话号码'
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
    field: 'enable',
    type: 'select',
    label: '用户状态',
    rules: [],
    placeholder: '请选择用户状态',
    options: [
      { label: '启用', value: 1 },
      { label: '禁用', value: 0 }
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
