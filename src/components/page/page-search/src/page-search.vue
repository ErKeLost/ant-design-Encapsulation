<template>
  <div class="container-page-search">
    <adny-form ref="form" v-bind="searchFormConfig" v-model="formOriginData">
      <template #footer>
        <div class="handle-btn">
          <a-button type="primary" icon="rest" @click="handleResetClick">重置</a-button>
          <a-button class="btn btn-search" type="primary" icon="search">搜索</a-button
          >
        </div>
      </template>
    </adny-form>
    {{ formOriginData }}
  </div>
</template>

<script>
import AdnyForm from '@/adny-ui/AdnyForm'
export default {
  components: {
    AdnyForm
  },
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      formOriginData: {},
      formItems: this.searchFormConfig.formItems
    }
  },
  watch: {
    formItems: {
      handler (newValue) {
        for (const item of this.formItems) {
          if (item.field.includes('Time')) {
            this.formOriginData[item.field] = []
          } else {
            this.formOriginData[item.field] = ''
          }
        }
        console.log(this.formOriginData)
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    handleResetClick () {
      this.$refs.form.$refs.formModel.resetFields()
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
