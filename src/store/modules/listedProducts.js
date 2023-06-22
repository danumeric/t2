import mockProducts from '@/mock/mockProducts.json'

export default {
  state: {
    listedProducts: [],
    searchFilterText: '',
  },
  getters: {
    g_listed_products(state) {
      return state.listedProducts
    },
    g_search_filter_text(state) {
      return state.searchFilterText
    },
  },
  mutations: {
    m_update_listed_products(state) {
      state.listedProducts = mockProducts.products
    },
    m_update_search_filter_text(state, searchFilterText) {
      state.searchFilterText = searchFilterText
    },
  },
  actions: {
    async a_fetch_mock_products(ctx) {
      ctx.commit('m_update_listed_products')
    },
  },
}
