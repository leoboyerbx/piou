<template>
  <div class="drawer">
    <div class="drawer-wrapper" :class="{ open }" v-touch:swipe.left="onSwipe">
      <div class="logo">
        <router-link to="/" @click.native="open = false">
          <img src="../assets/logo.svg" alt="logo"> Piou
        </router-link>
      </div>
      <nav class="global-nav">
        <ul>
          <li>
            <router-link @click.native="open = false" to="/"><HomeIcon :width="22" :height="25" class="icon" />{{ $t('ui.home') }}</router-link>
          </li>
          <li>
            <router-link @click.native="open = false" to="/rules"><RulesIcon :width="22" :height="25" class="icon" />{{ $t('ui.gamerules') }}</router-link>
          </li>
          <li v-if="deferredPrompt">
            <a href="#" @click.prevent="install"><InstallIcon :width="22" :height="25" class="icon" />{{ $t('ui.installApp') }}</a>
          </li>
        </ul>
      </nav>
      <div class="language-switch">
        <LanguageSwitcher @update="updateLang($event)"></LanguageSwitcher>
      </div>
<!--      <div class="version">v0.2.1</div>-->
    </div>
    <MenuButton class="menubutton" :class="{ open }" @click="open = !open" />
  </div>
</template>

<script>
import LanguageSwitcher from './elements/LanguageSwitcher'
import MenuButton from './elements/MenuButton'
import HomeIcon from '@/icons/HomeIcon'
import RulesIcon from '@/icons/RulesIcon'
import InstallIcon from '@/icons/InstallIcon'

export default {
  name: 'Drawer',
  components: {
    InstallIcon,
    RulesIcon,
    MenuButton,
    LanguageSwitcher,
    HomeIcon
  },
  props: {
  },
  data: () => ({
    open: false,
    deferredPrompt: null
  }),
  created () {
    window.addEventListener('beforeinstallprompt', this.listenerBeforeInstall.bind(this))
    window.addEventListener('appinstalled', this.listenerAppInstalled.bind(this))
  },
  destroyed () {
    window.removeEventListener('beforeinstallprompt', this.listenerBeforeInstall.bind(this))
    window.removeEventListener('appinstalled', this.listenerAppInstalled.bind(this))
  },
  computed: {
  },
  methods: {
    updateLang (lang) {
      this.$i18n.locale = lang
      this.$store.commit('setLocale', lang)
    },
    onSwipe (e) {
      this.open = false
    },
    listenerBeforeInstall (e) {
      e.preventDefault()
      this.deferredPrompt = e
    },
    listenerAppInstalled () {
      this.deferredPrompt = null
    },
    async install () {
      this.deferredPrompt.prompt()
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/scss/globals';

.menubutton {
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

  .logo {
    position: absolute;
    top: 0;
    left: 60px;
    right: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      text-decoration: none;
      color: $theme-color3;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 30px;
        margin-right: 5px;
      }
    }
  }

  .language-switch {
    position: absolute;
    left: 5%;
    width: 90%;
    bottom: 0;
  }
  .version {
    display: none;
    position: absolute;
    bottom: 5px;
    width: 100%;
    font-size: .6em;
    color: #aaa;
    text-align: center;
  }

  .global-nav {
    position: absolute;
    top: 60px;
    width: 100%;
    padding: 30px;
    font-size: 1.5em;
    ul {
      display: flex;
      flex-direction: column;
      list-style: none;
      padding: 0;
      li {
        padding: 8px 0;
        a {
        text-decoration: none;
        color: $theme-grey-dark;
        font-weight: 500;

        display: flex;
        align-items: center;
        width: auto;

        .icon {
          margin-right: 10px;
          //color: $theme-color1;
        }
        }
      }
    }
  }
}

</style>
