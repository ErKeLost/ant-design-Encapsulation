import * as echarts from 'echarts'

export default function (el) {
  const echartInstance = echarts.init(el)

  const setOptions = options => {
    // 2021.9.12
    // echartInstance.clear()
    echartInstance.setOption(options)
  }
  window.addEventListener('resize', () => {
    echartInstance.resize()
  })
  // 性能问题
  // echartInstance.on('finished', () => {
  //   echartInstance.resize()
  // })
  // 手动 resize
  const setResize = () => {
    echartInstance.resize()
  }
  return {
    echartInstance,
    setOptions,
    setResize
  }
}
