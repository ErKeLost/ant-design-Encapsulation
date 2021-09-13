import { getServiceList } from '@/api/manage'

import { getCategoryGoodsSale, getCategoryGoodsCount, getCategoryGoodsFavor } from '@/service/test/test'

const test = {
  namespaced: true,
  state () {
    return {
      data: {},
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    setData (state, data) {
      state.data = data
    },
    setCategoryGoodsCount (state, categoryGoodsCount) {
      state.categoryGoodsCount = categoryGoodsCount
    },
    setCategoryGoodsSale (state, categoryGoodsSale) {
      state.categoryGoodsSale = categoryGoodsSale
    },
    setCategoryGoodsFavor (state, categoryGoodsFavor) {
      state.categoryGoodsFavor = categoryGoodsFavor
    }
  },
  actions: {
    getData ({ commit }, payload) {
      getServiceList(payload).then((res) => {
        commit('setData', res)
      })
    },
    async getDataAction ({ commit }, payload) {
      const categoryGoodsCount = await getCategoryGoodsCount(payload)
      commit('setCategoryGoodsCount', categoryGoodsCount.data)
      // console.log(categoryGoodsCount)
      const categoryGoodsFavor = await getCategoryGoodsFavor(payload)
      commit('setCategoryGoodsFavor', categoryGoodsFavor.data)
      // console.log(categoryGoodsFavor)
      const categoryGoodsSale = await getCategoryGoodsSale(payload)
      commit('setCategoryGoodsSale', categoryGoodsSale.data)
      console.log(categoryGoodsSale)
    }
  }
}

export default test
