<template>
  <div>
    <a-row :gutter="10">
      <a-col :span="12">
        <!-- <a-card title="分类商品数量"> -->
        <div class="gutter">
          <line-echart :lineData="arrData" :xlabels="xlabels" v-if="arrData"></line-echart>
        </div>
        <!-- </a-card> -->
      </a-col>
      <a-col :span="6">
        <a-card title="不同城市商品销量">
          <pie-echart :pieData="pieData"></pie-echart>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card title="分类商品的下销量">
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import LineEchart from '@/components/echarts/src/line-echart.vue'
import PieEchart from '@/components/echarts/src/pie-echart.vue'
import { getCategoryGoodsSale } from '@/service/test/test'
export default {
  data () {
    return {
      arrData: [],
      xlabels: [],
      pieData: []
    }
  },
  computed: {
    ...mapState({
      categoryGoodsSale: state => state.test.categoryGoodsSale,
      categoryGoodsCount: state => state.test.categoryGoodsCount
    })
  },
  methods: {
    ...mapActions(['getDataAction'])
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
  },
  components: {
    LineEchart,
    PieEchart
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
