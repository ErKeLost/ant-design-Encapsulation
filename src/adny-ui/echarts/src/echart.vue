<template>
  <div class="base-echart" :style="{ width, height }">
    <div ref="echartRef" :style="{ width, height }"></div>
  </div>
</template>

<script>
import useEchart from '../hook/useEcharts'
export default {
  name: 'AdnyEchart',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    options: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      initRef: {}
    }
  },
  mounted () {
    this.setOptionsWithUpdate()
  },
  methods: {
    setOptionsWithUpdate () {
      this.initRef = useEchart(this.$refs.echartRef)
      this.initRef.setOptions(this.options)
    }
  },
  watch: {
    options: {
      handler (newValue) {
        this.$nextTick(() => {
          this.initRef.echartInstance.clear()
          this.initRef.setOptions(this.options)
        })
      },
      deep: true
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .ant-card-body {
  position: relative;
}
/deep/ .ant-card {
  border-radius: 5px;
}
</style>
