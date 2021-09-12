<template>
  <div class="container-adny-form table-page-search-wrapper">
    <div class="container-header">
      <slot name="header"></slot>
    </div>
    <a-spin :spinning="loading">
      <a-form-model ref="formModel" :model="formData" layout="inline" labelAlign="left">
        <a-row :gutter="0">
          <a-col v-bind="colLayout" v-for="item in formItems" :key="item.label">
            <a-form-model-item
              v-if="!item.isHidden"
              :wrapper-col="{ offset: 0 }"
              :label="item.label"
              class="form-model-item"
              :style="itemStyle"
              :prop="item.field"
              :rules="item.rules"
            >
              <template v-if="item.type === 'input' || item.type === 'password'">
                <a-input
                  :placeholder="item.placeholder"
                  v-model="formData[`${item.field}`]"
                  v-if="item.type !== 'password'"
                ></a-input>
                <a-input-password
                  v-model="formData[`${item.field}`]"
                  v-else
                  :placeholder="item.placeholder"
                ></a-input-password>
              </template>
              <template v-else-if="item.type === 'select'">
                <a-select :placeholder="item.placeholder" v-model="formData[`${item.field}`]">
                  <a-select-option v-for="option in item.options" :key="option.value" :value="option.value">{{
                    option.label
                  }}</a-select-option>
                </a-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <a-range-picker
                  style="width: 100%"
                  v-if="item.datePickerOptions.type === 'range'"
                  :placeholder="item.datePickerOptions.placeholder"
                  valueFormat="YYYY-MM-DD"
                  v-model="formData[`${item.field}`]"
                ></a-range-picker>
                <a-date-picker
                  style="width: 100%"
                  v-if="item.datePickerOptions.type === 'date'"
                  :placeholder="item.datePickerOptions.placeholder[0]"
                  valueFormat="YYYY-MM-DD"
                  v-model="formData[`${item.field}`]"
                ></a-date-picker>
                <a-month-picker
                  style="width: 100%"
                  v-if="item.datePickerOptions.type === 'month'"
                  :placeholder="item.datePickerOptions.placeholder[0]"
                  valueFormat="YYYY-MM-DD"
                  v-model="formData[`${item.field}`]"
                ></a-month-picker>
                <a-week-picker
                  style="width: 100%"
                  v-if="item.datePickerOptions.type === 'week'"
                  :placeholder="item.datePickerOptions.placeholder[0]"
                  valueFormat="YYYY-MM-DD"
                  v-model="formData[`${item.field}`]"
                ></a-week-picker>
              </template>
            </a-form-model-item>
          </a-col>
        </a-row>
      </a-form-model>
    </a-spin>
    <div class="container-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array,
      default: () => [],
      require: true
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '5px 40px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 8,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      formData: { ...this.value }
    }
  },
  watch: {
    formData: {
      handler (newValue) {
        this.$emit('input', newValue)
      },
      deep: true
    }
  }
}
</script>

<style lang="less" scoped>
.ant-form-item {
  /deep/ .ant-form-item-label {
    width: 70px !important;
  }
}
.container-adny-form {
  margin-top: 20px;
}
</style>
