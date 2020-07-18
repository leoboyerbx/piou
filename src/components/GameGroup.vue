<template>
  <div id="game">
    <div class="grapes-wrapper">
      <Grapes :lines="gameSettings.linesNum"
              :selectionMode="false"
              @eat="eatGrape"
              ref="grapes"
               />
    </div>
    <div class="piou-wrapper" :class="{visible: gameStep === 'piou' || gameStep === 'victory'}">
        <transition name="slide">
          <div v-show="gameStep === 'piou'">piou !</div>
        </transition>
        <transition name="slide">
          <div v-show="gameStep === 'victory'">victory !</div>
        </transition>
    </div>
    <div id="hint-wrapper" ref="hintWrapper">
      <div class="hint" v-show="gameStep === 'piou'">
        <p><strong>Defaite</strong></p>
        <div class="buttons">
          <button class="btn btn-light" @click="startOver">Start over</button>
          <button class="btn btn-theme" @click="continueGame">Continue</button>
        </div>
      </div>
    </div>

    <div id="glass-wrapper">
      <Glass :progress="progress" />
    </div>
  </div>
</template>

<script>
import Grapes from '@/components/Grapes.vue'
import Glass from '@/components/Glass'

export default {
  name: 'GameGroup',
  components: {
    Glass,
    Grapes
  },
  props: {
    gameSettings: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    targetGrape: null,
    gameStep: 'searching',
    grapesNum: null,
    eatenGrapes: [],
    eatingProgress: 0
  }),
  mounted () {
    this.grapesNum = this.$refs.grapes.grapes.length
    this.targetRandomGrape()
  },
  computed: {
    progress () {
      return (this.eatingProgress / this.grapesNum)
    }
  },
  methods: {
    startSearching () {
      this.gameStep = 'searching'
    },
    targetRandomGrape () {
      this.targetGrape = this.$refs.grapes.randomGrape(true).key
    },
    eatGrape (key) {
      this.eatenGrapes.push(key)
      if (key === this.targetGrape) {
        this.gameStep = 'piou'
        this.targetRandomGrape()
        this.eatingProgress = 0
      } else {
        this.eatingProgress++
      }
    },
    startOver () {
      this.$emit('start-over')
    },
    continueGame () {
      this.invertSearchingPlayer()
      this.$refs.grapes.clearSelection()
      this.gameStep = 'selectGrape'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/scss/globals";

.slide-enter-active, .fade-leave-active {
  transition: all .5s $transition-easing;
}
.slide-enter  /* .fade-leave-active below version 2.1.8 */ {
  transform: translate3D(100%, 0 ,0);
}
.slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate3D(-100%, 0 ,0);
}

#game {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

.grapes-wrapper {
  width: 90%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px auto;
}

.piou-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: transparentize($color: $theme-color1, $amount: .2);
  display: flex;
  opacity: 0;
  transition: all .4s ease;
  pointer-events: none;

  div {
    color: #fff;
    font-weight: 800;
    font-size: 5em;
    width: 100%;
    margin-top: 40%;
    text-align: center;
    transition: all .4s $transition-easing;
    /*transform: translate3d(100%, 0, 0);*/
  }

  &.visible {
    opacity: 1;
    div {
      transform: translate3d(0, 0, 0);
    }
  }
}

#hint-wrapper {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  background-color: #fff;

  .hint {
    p {
      font-size: 1.1em;
      margin: 30px
    }
    .buttons {
      margin: 10px 30px 20px;
      display: flex;
      justify-content: flex-end;
      button {
        margin-left: 10px
      }
    }
  }
}
.scores-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transition: all .3s;
  .score {
    margin: 10px;
    text-align: center;
    font-size: 1.3em;
  }
  &.white {
    color: #fff;
  }
}
</style>
