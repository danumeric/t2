<template>
  <div id="wrapper">
    <div class="mt-5 d-flex justify-center">
      <v-btn id="btn-chat"> Открыть чат </v-btn>
    </div>
    <div class="mt-5">
      <p v-for="n in 100" :key="n">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CardsGallery',
  data() {
    return {
      distance: 0,
    }
  },
  computed: {
    distancePx() {
      return this.distance + 'px'
    },
  },
  mounted() {
    let scr = document.createElement('script')
    scr.setAttribute('src', '//cdn5.helpdeskeddy.com//js/modules/chat_widget/hde.js')
    scr.setAttribute('data-lang', 'ru')
    scr.setAttribute('id', 'hde-chat-widget')
    scr.setAttribute('data-host', 'nsys.helpdeskeddy.com')
    scr.setAttribute('data-position', 'bottom-right')
    scr.setAttribute('data-custom-button', 'btn-chat')

    document.body.appendChild(scr)
  },
  components: {},
}
</script>
<style lang="scss">
#wrapper {
  background: #fdfdfd;
}
// #hde-container {
//   width: 650px !important;
// }
// .widget-app_web-button {
//   transform: translate(200px, 0);
// }

.hde-container-mobile {
  //  width: calc(v-bind('distancePx') + 350px);
  width: calc(350px + 15vw) !important;
}
// #btn-chat {
//   background: #e016163a;
//   width: 100px;
//   height: 100px;
// }
</style>
