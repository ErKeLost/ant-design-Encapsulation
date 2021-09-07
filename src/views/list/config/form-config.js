const formItems = [{
    field: 'name',
    type: 'input',
    label: '用户名',
    rules: [],
    placeholder: '请输入用户名'
  },
  {
    field: 'password',
    type: 'password',
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
    options: [{
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
    padding: '5px 30px'
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
export {
  formItems,
  formConfig
}
