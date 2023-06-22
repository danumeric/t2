<template>
  <router-view />
</template>

<script>
import HeaderMain from '@/components/header/HeaderMain'
import FooterMain from '@/components/footer/FooterMain'
import { mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    HeaderMain,
    FooterMain,
  },
  data: () => ({
    //
  }),
  methods: {
    ...mapMutations(['m_initialise_product_card']),
  },
  created() {
    this.$store.commit('m_initialise_product_card')
  },
}
</script>
<style lang="scss">
@import './scss/null.scss';
@import './scss/container.scss';

.container {
  padding: 0 !important;
}
.v-application p {
  margin-bottom: 0;
}
</style>
