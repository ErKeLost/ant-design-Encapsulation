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
    field: 'password',
    type: 'password',
    label: '密码',
    rules: [],
    placeholder: '请输入密码'
  },
  {
    field: 'cellphone',
    type: 'input',
    label: '电话号码',
    rules: [],
    placeholder: '请输入电话号码'
  },
  {
    field: 'departmentId',
    type: 'select',
    label: '选择部门',
    rules: [],
    placeholder: '请选择部门',
    options: []
  },
  {
    field: 'roleId',
    type: 'select',
    label: '选择角色',
    rules: [],
    placeholder: '请选择角色',
    options: []
  }
]
const modalConfig = {
  loading: false,
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
