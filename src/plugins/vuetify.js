import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import ru from 'vuetify/lib/locale/ru'

export default new Vuetify({
  breakpoint: {
    thresholds: {
      xs: 575,
      sm: 767,
      md: 991,
      lg: 1264, //1264px > < 1904px*
      xl: 1264, //> 1904px*
    },
    scrollbarWidth: 16,
  },
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#343030',
        background: '#F6F3F3',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  },
  lang: {
    locales: { ru },
    current: 'ru',
  },
})
Vue.use(Vuetify)
