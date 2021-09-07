<template>
  <div>
    <page-header-wrapper>
      <a-card>
<<<<<<< HEAD
        <page-search :searchFormConfig="formConfig"></page-search>
=======
        <adny-form v-bind="formConfig" v-model="formData"></adny-form>
        {{ formData }}
>>>>>>> fff1666721e52d96a8941cb8e2d02ac8ec519e51
      </a-card>
    </page-header-wrapper>
  </div>
</template>

<script>
<<<<<<< HEAD
import PageSearch from '@/components/page/page-search'
import { formItems, formConfig } from './config/form-config'
export default {
  components: {
    PageSearch
=======
import AdnyForm from '@/adny-ui/AdnyForm'
import { formItems, formConfig } from './config/form-config'
export default {
  components: {
    AdnyForm
>>>>>>> fff1666721e52d96a8941cb8e2d02ac8ec519e51
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

<<<<<<< HEAD
<style lang="less" scoped>
.handle-btn {
  text-align: right;
  .btn-search {
    margin-left: 30px;
  }
}
</style>
=======
<style lang="scss" scoped></style>
>>>>>>> fff1666721e52d96a8941cb8e2d02ac8ec519e51
