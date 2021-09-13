<template>
  <div>
    <adny-echart :options="options"></adny-echart>
  </div>
</template>

<script>
import AdnyEchart from '../../echart.vue'
export default {
  name: 'AdnyBar',
  components: {
    AdnyEchart
  },
  props: {
    xlabels: {
      type: Array,
      default: () => []
    },
    barData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      options: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        xAxis: {
          type: 'category',
          data: this.xlabels
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.barData,
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
