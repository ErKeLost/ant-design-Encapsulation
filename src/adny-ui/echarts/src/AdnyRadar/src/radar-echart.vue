<template>
  <div>
    <adny-echart :options="option"></adny-echart>
  </div>
</template>

<script>
import AdnyEchart from '../../echart.vue'
// import * as echarts from 'echarts'
var names = [
  { max: 6500, name: '销售（sales）' },
  { name: '管理（Administration）', max: 16000 },
  { name: '信息技术（Information Techology）', max: 30000 },
  { name: '客服（Customer Support）', max: 38000 }
]
export default {
  name: 'AdnyRadar',
  props: {
    radarData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      legendData: [],
      indicatorData: [],
      option: {
        title: {
        },
        tooltip: {},
        legend: {
          top: 0,
          itemWidth: 12,
          itemHeight: 12,
          data: this.legendData,
          textStyle: {
            color: '#fff'
          }
        },
        radar: {
          radius: '60%',
          splitNumber: 8,
          axisLine: {
            lineStyle: {
              color: '#fff',
              opacity: 0.2
            }
          },
          splitLine: {
            lineStyle: {
              color: '#fff',
              opacity: 0.2
            }
          },
          splitArea: {
            areaStyle: {
              color: 'rgba(127,95,132,.3)',
              opacity: 1,
              shadowBlur: 45,
              shadowColor: 'rgba(0,0,0,.5)',
              shadowOffsetX: 0,
              shadowOffsetY: 15
            }
          },
          indicator: names
        },
        series: [
          {
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            symbolSize: 0,
            areaStyle: {
              normal: {
                shadowBlur: 13,
                shadowColor: 'rgba(0,0,0,.2)',
                shadowOffsetX: 0,
                shadowOffsetY: 10,
                opacity: 1
              }
            },
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: '预算分配（Allocated Budget'
              },
              {
                value: [5000, 1400, 28000, 11100, 42000, 21000],
                name: '实际开销（Actual Spending'
              }
            ]
          }
        ],
        color: ['#ef4b4c', '#b1eadb'],
        backgroundColor: {
          type: 'radial',
          x: 0.4,
          y: 0.4,
          r: 0.35,
          colorStops: [
            {
              offset: 0,
              color: '#895355' // 0% 处的颜色
            },
            {
              offset: 0.4,
              color: '#593640' // 100% 处的颜色
            },
            {
              offset: 1,
              color: '#39273d' // 100% 处的颜色
            }
          ],
          globalCoord: false // 缺省为 false
        }
      }
    }
  },
  components: {
    AdnyEchart
  },
  watch: {
    radarData: {
      handler (newValue) {
        const arr = []
        newValue.map(item => {
          this.legendData.push(item.name)
          arr.push({ name: item.name, max: item.value * 2000 })
        })
        this.indicatorData = arr.slice(0, 6)
        console.log(this.indicatorData)
      },
      immediate: true
    }
  }
}
</script>

<style lang="less" scoped>
</style>
