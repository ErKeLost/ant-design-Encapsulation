<template>
  <div>
    <page-header-wrapper>
      <a-card>
        <adny-form v-bind="formConfig" v-model="formData"></adny-form>
        {{ formData }}
      </a-card>
    </page-header-wrapper>
  </div>
</template>

<script>
import AdnyForm from '@/adny-ui/AdnyForm'
import { formItems, formConfig } from './config/form-config'
export default {
  components: {
    AdnyForm
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

<style lang="scss" scoped></style>
