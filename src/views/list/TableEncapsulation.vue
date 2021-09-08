<template>
  <div>
    <page-header-wrapper>
      <a-card>
        <page-search
          class="search-class"
          :searchFormConfig="formConfig"
          @resetBtnClick="HandleResetBtnClick"
          @searchBtnClick="HandleSearchBtnClick"
          @buildNewData="handleNewData"
        ></page-search>
        <page-table
          ref="table"
          size="default"
          rowKey="key"
          :columns="tableConfig"
          :data="loadData"
          showPagination="auto"
        >
          <span slot="action" slot-scope="text, record">
            <template>
              <a @click="handleEdit(record)">配置</a>
              <a-divider type="vertical" />
              <a @click="handleSub(record)">订阅报警</a>
            </template>
          </span>
        </page-table>
        <page-modal :modalData="modalData" ref="modal" :modalConfig="modalConfig"></page-modal>
      </a-card>
    </page-header-wrapper>
  </div>
</template>

<script>
import PageModal from '@/components/page/page-modal'
import PageSearch from '@/components/page/page-search'
import PageTable from '@/components/page/page-table'
import { formConfig } from './config/form-config'
import { modalConfig } from './config/modal-config'
import { tableConfig } from './config/table-config'
import { getServiceList } from '@/api/manage'
import { Ellipsis } from '@/components'
export default {
  components: {
    PageSearch,
    PageTable,
    PageModal,
    Ellipsis
  },
  data () {
    return {
      modalData: {},
      modalConfig,
      formConfig,
      tableConfig,
      // 查询参数
      queryParam: {},
      loadData: parameter => {
        const requestParameters = Object.assign({}, parameter, this.queryParam)
        console.log('loadData request parameters:', requestParameters, parameter)
        return getServiceList(requestParameters)
          .then(res => {
            console.log(res.result)
            return res.result
          })
      }
    }
  },
  methods: {
    refresh () {
      this.$refs.table.refresh(true)
    },
    HandleResetBtnClick () {
      this.refresh()
    },
    HandleSearchBtnClick (data) {
      this.queryParam = data
      console.log(data)
      this.refresh()
    },
    handleEdit (data) {
      this.modalData = { ...data }
      this.$refs.modal.visible = true
      this.editCallback()
    },
    handleNewData () {
      this.modalData = {}
      this.$refs.modal.visible = true
      this.newCallback()
    },
    newCallback () {
      const isHiddenItem = this.modalConfig.formItems.find(item => item.field === 'no')
      isHiddenItem.isHidden = false
      this.modalConfig.modalTitle = '新建'
    },
    editCallback (data) {
      const isHiddenItem = this.modalConfig.formItems.find(item => item.field === 'no')
      isHiddenItem.isHidden = true
      this.modalConfig.modalTitle = '编辑'
    }
  }
}
</script>

<style lang="less" scoped>
.search-class {
  margin-bottom: 20px;
}
.newButton {
  margin: 20px 0;
}
</style>
