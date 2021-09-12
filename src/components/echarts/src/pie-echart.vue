<template>
  <div>
    <adny-echart :options="option"></adny-echart>
  </div>
</template>

<script>
import AdnyEchart from '../index'
export default {
  components: {
    AdnyEchart
  },
  props: {
    pieData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      option: {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '0%',
          left: 'center'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['85%', '60%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: this.pieData
          }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
