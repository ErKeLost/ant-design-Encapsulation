<template>
  <div>
    <page-header-wrapper>
      <a-card>
        <adny-search
          :style="formConfig.searchStyle"
          :searchFormConfig="formConfig"
          @resetBtnClick="HandleResetBtnClick"
          @searchBtnClick="HandleSearchBtnClick"
          @buildNewData="handleNewData"
        ></adny-search>
        <adny-table
          ref="table"
          size="default"
          rowKey="id"
          :alert="true"
          :columns="tableConfig"
          :data="loadData"
          :rowSelection="rowSelection"
          showPagination="auto"
        >
          <span slot="createAt" slot-scope="text">
            {{ $format(text) }}
          </span>
          <span slot="action" slot-scope="text, record">
            <template>
              <a-button type="danger" @click="handleEdit(record)">配置</a-button>
              <a-divider type="vertical" />
            </template>
          </span>
        </adny-table>
        <adny-modal
          :modalData="modalData"
          ref="modal"
          :modalConfig="modalConfig"
          @handleConfimClick="HandleConfimClick"
          :newServiceData="newServiceData"
          :editServiceData="editServiceData"
          :serviceParameters="serviceParameters"
          :defaultInfo="defaultInfo"
        ></adny-modal>
      </a-card>
    </page-header-wrapper>
  </div>
</template>

<script>
// import PageModal from '@/adny-ui/page/src/page-modal'
// import PageSearch from '@/adny-ui/page/src/page-search'
// import PageTable from '@/adny-ui/page/src/page-table'
import { formConfig } from './config/form-config'
import { modalConfig } from './config/modal-config'
import { tableConfig } from './config/table-config'
import { newPageData, getPageList, editPageData } from '@/service/test/test.js'
export default {
  components: {
    // PageSearch,
    // PageTable,
    // PageModal
  },
  data () {
    return {
      // 默认每条数据原始数据
      defaultInfo: {},
      selectedRowKeys: [],
      selectedRows: [],
      // 对话框数据
      modalData: {},
      // 对话框配置
      modalConfig,
      // 表单配置
      formConfig,
      // table 配置
      tableConfig,
      // 查询参数
      queryParam: {},
      // 编辑table 列数据
      rowData: {},
      // table 数据
      serviceParameters: { pageNo: 1, pageSize: 100 },
      loadData: (parameter) => {
        const requestParameters = Object.assign({}, parameter, this.queryParam)
        requestParameters.size = requestParameters.pageSize
        requestParameters.offset = 1
        delete requestParameters.pageSize
        delete requestParameters.pageNo
        console.log(requestParameters)
        return getPageList(requestParameters).then((res) => {
          const obj = {}
          obj.pageSize = 10
          obj.pageNo = 1
          obj.totalPage = 90
          obj.totalCount = 90
          obj.data = res.data.list
          console.log(obj)
          return obj
        })
      }
    }
  },
  methods: {
    // 编辑 新建 请求接口
    async newServiceData (data) {
      const result = await newPageData('users', { ...data, departmentId: 2, roleId: 1 })
      console.log(result)
    },
    async editServiceData (id, data) {
      const result = await editPageData(`users/${id}`, data)
      console.log(result)
    },
    // 确认按钮
    HandleConfimClick (data) {
      this.rowData = data
    },
    // 重置刷新按钮
    HandleResetBtnClick () {
      this.useAction('refresh')
    },
    // 搜索刷新按钮
    HandleSearchBtnClick (data) {
      this.queryParam = data
      this.useAction('refresh')
    },
    // 编辑按钮
    handleEdit (data) {
      this.defaultInfo = data
      this.modalData = { ...data }
      this.useAction('visible', true)
      this.HiddenActionCallback(true, '编辑')
    },
    // 新建按钮
    handleNewData () {
      this.modalData = {}
      this.useAction('visible', true)
      this.HiddenActionCallback(false, '新建')
    },
    // 是否隐藏某节点
    HiddenActionCallback (isHidden, title) {
      const isHiddenItem = this.modalConfig.formItems.find(
        (item) => item.field === 'name'
      )
      isHiddenItem.isHidden = isHidden
      this.modalConfig.modalTitle = title
    },
    // hook函数 行为动态
    useAction () {
      if (arguments[0] === 'refresh') this.$refs.table.refresh(true)
      if (arguments[0] === 'visible') this.$refs.modal.visible = arguments[1]
    },
    onSelectChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
      console.log(this.selectedRows)
    }
  },
  computed: {
    rowSelection () {
      return {
        selectedRowKeys: this.selectedRowKeys,
        onChange: this.onSelectChange
      }
    }
  }
}
</script>
