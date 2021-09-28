<template>
  <div class="container-page-search">
    <adny-form ref="form" v-bind="searchFormConfig" v-model="formOriginData">
      <template #footer>
        <div class="handle-btn">
          <a-row>
            <a-col v-bind="searchFormConfig.colLayout">
              <a-button icon="user-add" type="primary" class="newButton" @click="handleNewData">新建用户</a-button>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <a-button class="xsButton" type="primary" icon="rest" @click="handleResetClick">重置</a-button>
              <a-button class="btn btn-search" type="primary" icon="search" @click="handleSearchClick">搜索</a-button>
            </a-col>
          </a-row>
        </div>
      </template>
    </adny-form>
  </div>
</template>

<script>
import AdnyForm from '../../../AdnyForm'
export default {
  name: 'AdnySearch',
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
        console.log(this.searchFormConfig)
        for (const item of this.formItems) {
          if (item.field.includes('Time')) {
            this.formOriginData[item.field] = []
          } else {
            this.formOriginData[item.field] = ''
          }
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    handleResetClick () {
      this.$refs.form.$refs.formModel.resetFields()
      this.$emit('resetBtnClick')
    },
    handleSearchClick () {
      this.$emit('searchBtnClick', this.formOriginData)
    },
    handleNewData () {
      this.$emit('buildNewData')
    }
  }
}
</script>

<style lang="less" scoped>
.handle-btn {
  display: flex;
  justify-content: space-between;
  .newButton {
    // margin-top: 50px;
  }
  .btn-search {
    // margin-left: 100px;
  }
}
@media (min-width:986px) {
    .newButton {
    margin-top: 50px;
  }
  .btn-search {
    margin-left: 50px;
  }
}
</style>
