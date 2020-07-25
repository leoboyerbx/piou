<template>

  <div id="app">
    <TopBar :folded="topBar !== 'expanded'" :hidden="topBar === 'hidden'" />
    <router-view />
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue'

export default {
  name: 'App',
  components: {
    TopBar
  },
  data () {
    return {
      linesNum: '4',
      gameSettings: {}
    }
  },
  computed: {
    linesInt () {
      return parseInt(this.linesNum)
    },
    topBar () {
      return this.$store.state.topBar
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
  @import "@/scss/globals";
  @import "@/scss/buttons";
  //fonts
  @import "./fonts/MarkPro.css";

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: "Mark Pro", sans-serif;
    color: $theme-black;
    background-color: $background;
  }

  .input-container {
    position: relative;
    margin: 0 0 40px;

    input {
      outline: none;
      z-index: 1;
      position: relative;
      background: none;
      width: 100%;
      height: 60px;
      border: 0;
      color: #212121;
      font-size: 1.2em;
      font-weight: 400;
      font-family: "Mark Pro", sans-serif;

      &:focus {
        ~ label {
          color: #9d9d9d;
          transform: translate(-12%, -50%) scale(0.75);
        }

        ~ .bar {
          &:before,
          &:after {
            width: 50%;
          }
        }
      }

      &:valid {
        ~ label {
          color: #9d9d9d;
          transform: translate(-12%, -50%) scale(0.75);
        }
      }
    }

    label {
      position: absolute;
      top: 0;
      left: 0;
      color: #757575;
      font-size: 1.2em;
      font-weight: 300;
      line-height: 60px;
      transition: all .4s $transition-easing;
    }

    .bar {
      position: absolute;
      left: 0;
      bottom: 0;
      background: #757575;
      width: 100%;
      height: 1px;

      &:before,
      &:after {
        content: '';
        position: absolute;
        background: $theme-color1;
        width: 0;
        height: 2px;
        transition: .2s ease;
      }

      &:before {
        left: 50%;
      }

      &:after {
        right: 50%;
      }
    }
  }

</style>
