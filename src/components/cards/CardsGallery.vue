<template>
  <div id="wrapper">
    <div id="demo__button">Chat</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CardsGallery',
  data() {
    return {}
  },
  mounted() {
    let scr = document.createElement('script')
    scr.setAttribute('src', '//cdn5.helpdeskeddy.com//js/modules/chat_widget/hde.js')
    scr.setAttribute('data-lang', 'ru')
    scr.setAttribute('id', 'hde-chat-widget')
    scr.setAttribute('data-host', 'nsys.helpdeskeddy.com')
    scr.setAttribute('data-position', 'bottom-right')

    document.body.appendChild(scr)
  },
  components: {},
}
</script>
<style lang="scss" scoped>
#wrapper {
  background: #c5c5c5;
  width: 400px;
  height: 400px;
}
#hde-container {
  inset: 44px 0px 0px 44px;
}
</style>
