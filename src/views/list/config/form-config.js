<<<<<<< HEAD
const formItems = [
  {
    field: 'name',
    type: 'input',
    label: '用户名',
    rules: [
      { min: 3, max: 5, message: '长度在三到五之间', trigger: 'blur' }
    ],
=======
const formItems = [{
    field: 'name',
    type: 'input',
    label: '用户名',
    rules: [],
>>>>>>> fff1666721e52d96a8941cb8e2d02ac8ec519e51
    placeholder: '请输入用户名'
  },
  {
    field: 'password',
<<<<<<< HEAD
    type: 'input',
=======
    type: 'password',
>>>>>>> fff1666721e52d96a8941cb8e2d02ac8ec519e51
    label: '密码',
    rules: [],
    placeholder: '请输入密码'
  },
  {
    field: 'createTime',
    type: 'datepicker',
    label: '创建时间',
    rules: [],
    datePickerOptions: {
      placeholder: ['请选择创建时间', '请选择技术日期创建时间'],
      type: 'range'
    }
  },
  {
    field: 'chooseName',
    type: 'select',
    label: '选择姓名',
    rules: [],
    placeholder: '请选择姓名',
<<<<<<< HEAD
    options: [
      {
=======
    options: [{
>>>>>>> fff1666721e52d96a8941cb8e2d02ac8ec519e51
        label: 'adny',
        value: 'girl'
      },
      {
        label: 'erkelost',
        value: 'boy'
      }
    ]
  }
]
const formConfig = {
  itemStyle: {
<<<<<<< HEAD
    padding: '5px 30px 5px 0px'
=======
    padding: '5px 30px'
>>>>>>> fff1666721e52d96a8941cb8e2d02ac8ec519e51
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
<<<<<<< HEAD
export { formItems, formConfig }
=======
export {
  formItems,
  formConfig
}
>>>>>>> fff1666721e52d96a8941cb8e2d02ac8ec519e51
