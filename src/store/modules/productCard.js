export default {
  state: {
    productCard: [],
  },
  getters: {
    g_product_card(state) {
      return state.productCard
    },
    g_module_listed_products_listed_products(state, _, rootState) {
      return rootState.listedProducts.listedProducts
    },
  },
  mutations: {
    m_initialise_product_card(state) {
      if (!localStorage.productCardTest) {
        state.productCard = []
        return
      }
      state.productCard = JSON.parse(localStorage.productCardTest)
    },
    m_add_product_to_card(state, productId) {
      state.productCard.push(
        this.getters.g_module_listed_products_listed_products.find((pr) => pr.id === productId)
      )
      localStorage.productCardTest = JSON.stringify(state.productCard)
    },
  },
  actions: {
    async fetchFriends(ctx) {
      ctx.commit('updateFriendsDB')
    },
  },
}
