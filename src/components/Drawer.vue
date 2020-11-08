<template>
  <div class="drawer">
    <div class="drawer-wrapper" :class="{ open }">
      <div class="language-switch">
        <LanguageSwitcher @update="updateLang($event)"></LanguageSwitcher>
      </div>
      <div class="version">v0.2.0</div>
    </div>
    <MenuButton id="menubutton" @click="open = !open" />
  </div>
</template>

<script>
import LanguageSwitcher from './LanguageSwitcher'
import MenuButton from './MenuButton'
export default {
  name: 'Drawer',
  components: {
    MenuButton,
    LanguageSwitcher
  },
  props: {
  },
  data: () => ({
    open: false
  }),
  computed: {
  },
  methods: {
    updateLang (lang) {
      this.$i18n.locale = lang
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/scss/globals';

#menubutton {
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 1000;
}

.drawer-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 200;
  background-color: #fff;
  pointer-events: none;
  transform: translateX(-100%);
  transition: all .3s $transition-easing;

  &.open {
    transform: translateX(0);
    pointer-events: all;
  }

  .language-switch {
    position: absolute;
    left: 5%;
    width: 90%;
    top: 100px;
  }
  .version {
    position: absolute;
    bottom: 5px;
    width: 100%;
    font-size: .6em;
    color: #aaa;
    text-align: center;
  }
}

</style>
