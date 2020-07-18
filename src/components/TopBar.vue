<template>
  <div id="topbar" :class="{unfolded: !folded, hidden: hidden}">
    <div class="folded-items">
      <MenuButton id="menubutton" />
    </div>
    <transition name="fade">
      <div v-show="!folded" class="start">
        <span>
          <h1>Piou !</h1>
          <p>The grape game.</p>
        </span>
        <router-link to="/select-game">
          <button @click="newGame" class="btn btn-theme">New game</button>
        </router-link>
      </div>
    </transition>
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo.svg" alt="">
      </router-link>
    </div>
  </div>
</template>

<script>
import MenuButton from './MenuButton'

export default {
  name: 'TopBar',
  components: {
    MenuButton
  },
  props: {
    folded: {
      type: Boolean,
      required: true,
      default: false
    },
    hidden: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: () => ({
  }),
  computed: {
  },
  methods: {
    newGame () {
      this.$emit('new-game')
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/scss/globals';

// Transitions
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transition-delay: 0s;
}

#topbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transition: all .5s $transition-easing;
  &.unfolded {
    height: 100%;
  }
  &.hidden {
    transform: translate3d(0, -100%, 0);
   opacity: 0;
  }
  z-index: 1000;

  .folded-items {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    display: flex;
    padding: 12px;
    align-items: center;

    #menubutton {
      transform: scale(.8);
    }
  }

  .logo {
    position: absolute;
    height: 60%;
    width: 100%;
    top: 20%;
    transition: all .5s $transition-easing;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &.unfolded {
    .logo {
      top: 20%;
      height: 30%;
      width: 100%;

    }
  }
  .start {
    position: absolute;
    top: 50%;
    width: 100%;
    height: 40%;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-around;

    h1 {
      margin-bottom: 0;
    }
    p {
      margin-top: 5px;
      font-weight: 'lighter';
      margin-bottom: 10px;
    }
  }
}
</style>
