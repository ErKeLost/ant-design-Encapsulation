<template>
  <div>
    <adny-echart :options="option"></adny-echart>
  </div>
</template>

<script>
import AdnyEchart from '../../echart.vue'
// import * as echarts from 'echarts'
export default {
  name: 'AdnyLine',
  props: {
    lineData: {
      type: Array,
      default: () => []
    },
    xlabels: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: this.xlabels
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '分类销量统计',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: this.lineData
          }
        ]
      }
    }
  },
  components: {
    AdnyEchart
  }
}
</script>

<style lang="less" scoped>
</style>
