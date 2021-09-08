<template>
  <div class="container-page-modal">
    <a-modal
      :title="modalConfig.modalTitle"
      :visible="visible"
      :destroyOnClose="true"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <adny-form v-bind="modalConfig" v-model="formData"></adny-form>
    </a-modal>
  </div>
</template>

<script>
import AdnyForm from '@/adny-ui/AdnyForm'
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
    }
  },
  data () {
    return {
      formData: {},
      visible: false
    }
  },
  watch: {
    modalData (newValue) {
      // this.formData = newValue
      for (const item of this.modalConfig.formItems) {
        this.formData[`${item.field}`] = newValue[`${item.field}`]
      }
    }
  },
  methods: {
    handleOk () {
    },
    handleCancel () {
      this.visible = false
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
</style>
