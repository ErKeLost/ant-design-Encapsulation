<template>
  <div class="container-page-modal">
    <a-modal
      :title="modalConfig.modalTitle"
      :visible="visible"
      :destroyOnClose="true"
      :confirmLoading="loading"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <adny-form ref="form" v-bind="modalConfig" v-model="formData"></adny-form>
    </a-modal>
  </div>
</template>

<script>
import AdnyForm from '../../AdnyForm'
export default {
  components: {
    AdnyForm
  },
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    modalData: {
      type: Object,
      default: () => {}
    },
    serviceData: {
      type: Function,
      require: true,
      default: () => {}
    },
    serviceParameters: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      formData: {},
      visible: false,
      loading: false,
      // 新增 编辑类型
      type: [],
      // table实例
      table: this.$parent
    }
  },
  watch: {
    modalData (newValue) {
      this.type = Object.keys(newValue)
      for (const item of this.modalConfig.formItems) {
        this.formData[`${item.field}`] = newValue[`${item.field}`]
      }
    }
  },
  methods: {
    handleOk () {
      // this.$emit('handleConfimClick', this.modalData)
      const form = this.$refs.form.$refs.formModel
      // console.log(this.table.$children.$refs.table)
      form.validate((errors, values) => {
        if (errors) {
          console.log(errors)
          this.loading = true
          this.modalConfig.loading = true
          if (this.type.length === 0) {
            console.log('这是新增操作')
            this.$emit('handleConfimClick', this.formData)
            console.log(this.formData)
            this.serviceData(this.formData)
              .then((res) => {
                console.log(res)
                this.loading = false
                this.modalConfig.loading = false
                this.visible = false
                this.$parent.$children[0].handleResetClick()
                this.$message['success']('新建成功')
              })
          } else {
            console.log('这是编辑操作')
            this.$emit('handleConfimClick', this.formData)
            console.log(this.formData)
            this.serviceData(this.formData)
              .then((res) => {
                console.log(res)
                console.log(this.modalData)
                this.loading = false
                this.modalConfig.loading = false
                this.visible = false
                this.$parent.$children[0].handleResetClick()
                this.$message['success']('编辑成功')
              })
          }
        }
      })
    },
    handleCancel () {
      this.visible = false
      this.loading = false
      this.modalConfig.loading = false
    }
  }
}
</script>

<style lang="less" scoped>
.handle-btn {
  text-align: right;
  .btn-search {
    margin-left: 30px;
  }
}
/deep/ .ant-modal-content {
  border-radius: 10px;
}
/deep/ .ant-modal-header {
  border-radius: 10px;
}
</style>
