<template>
  <div>
    <a-row :gutter="10">
      <a-col :span="12">
        <!-- <a-card title="分类商品数量"> -->
        <a-card title="不同城市商品销量" :loading="loading">
          <adny-line :lineData="arrData" :xlabels="xlabels" v-if="arrData"></adny-line>
        </a-card>
        <!-- </a-card> -->
      </a-col>
      <a-col :span="12">
        <a-card title="不同城市商品销量" :loading="loading">
          <!-- <pie-echart :pieData="pieData"></pie-echart> -->
          <adny-pie :pieData="pieData"></adny-pie>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="分类商品的下销量" :loading="loading">
          <adny-bar :barData="arrData" :xlabels="xlabels"></adny-bar>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="分类商品的下销量" :loading="loading">
          <adny-radar :radarData="pieData"></adny-radar>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import LineEchart from '@/components/echarts/src/line-echart.vue'
import BarEchart from '@/components/echarts/src/bar-echart.vue'
import { getCategoryGoodsSale } from '@/service/test/test'
export default {
  data () {
    return {
      arrData: [],
      xlabels: [],
      pieData: [],
      BarEchart: [],
      loading: true
    }
  },
  computed: {
    ...mapState('test', {
      categoryGoodsSale: state => state.categoryGoodsSale,
      categoryGoodsCount: state => state.categoryGoodsCount
    })
  },
  methods: {
    ...mapActions('test', ['getDataAction'])
  },
  async created () {
    const data = await getCategoryGoodsSale()
    await this.getDataAction()
    console.log(data)
    this.categoryGoodsCount.map((item) => {
      this.pieData.push({ value: item.goodsCount, name: item.name })
    })
    console.log(this.pieData)
    for (const item of data.data) {
      this.xlabels.push(item.name)
      this.arrData.push(item.goodsCount)
    }
    this.loading = !this.loading
  },
  components: {
    LineEchart,
    BarEchart
  }
}
</script>

<style lang="less" scoped>
.gutter {
  width: 600px;
  height: 300px;
  border: 1px solid #fba;
}
</style>
