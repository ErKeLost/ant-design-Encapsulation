<template>
  <div>
    <page-header-wrapper>
      <a-card>
        <page-search :searchFormConfig="formConfig"></page-search>
      </a-card>
    </page-header-wrapper>
  </div>
</template>

<script>
import PageSearch from '@/components/page/page-search'
import { formItems, formConfig } from './config/form-config'
export default {
  components: {
    PageSearch
  },
  data () {
    return {
      formData: {
        name: '',
        password: '',
        createTime: [],
        chooseName: ''
      },
      formItems,
      formConfig
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
