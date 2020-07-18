<template>
  <div id="game">
    <div class="grapes-wrapper" :style="{ 'margin-bottom': (this.hintHeight + 30) + 'px' }">
      <Grapes :linesNum="gameSettings.linesNum"
              :selectionMode="['selectGrape', 'piou', 'victory'].includes(gameStep)"
              @select="selectGrape"
              @eat="eatGrape"
              ref="grapes"
               />
    </div>
    <div class="piou-wrapper" :class="{visible: gameStep === 'piou' || gameStep === 'victory'}">
        <transition name="slide">
          <div v-show="gameStep === 'piou' || willLose">piou !</div>
        </transition>
        <transition name="slide">
          <div v-show="gameStep === 'victory' && !willLose">victory !</div>
        </transition>
    </div>
    <div id="hint-wrapper" ref="hintWrapper">
      <div class="hint" v-show="gameStep === 'selectGrape'">
        <p><strong>{{ selectingPlayer.name }}</strong> chooses a grape without <strong>{{ searchingPlayer.name }}</strong> seeing it !</p>
        <div class="buttons">
          <button class="btn btn-theme" @click="startSearching" :disabled="targetGrape === null">Ok</button>
        </div>
      </div>
      <div class="hint" v-show="gameStep === 'searching'">
        <p><strong>{{ searchingPlayer.name }}</strong> tries to eat as much grapes as possibles...</p>
      </div>
      <div class="hint" v-show="gameStep === 'piou'">
        <p><strong>{{ searchingPlayer.name }}</strong> lost !</p>
        <div class="buttons">
          <button class="btn btn-light" @click="startOver">Start over</button>
          <button class="btn btn-theme" @click="continueGame">Continue</button>
        </div>
      </div>
      <div class="hint" v-show="gameStep === 'victory'">
        <p v-if="searchingPlayer.score >= selectingPlayer.score"><strong>{{ searchingPlayer.name }}</strong> won !</p>
        <p v-else><strong>{{ searchingPlayer.name }}</strong> won but <strong>{{ selectingPlayer.name }}</strong> ate more grapes !</p>
        <div class="buttons">
          <button class="btn btn-theme" @click="startOver">Start over</button>
        </div>
      </div>
    </div>
    <div class="scores-wrapper" :class="{white: gameStep === 'piou' || gameStep === 'victory'}">
      <div class="score">
        <strong>{{ player1.name }}</strong><br>
        {{ player1.score }}
      </div>
      <div class="score">
        <strong>{{ player2.name }}</strong><br>
        {{ player2.score }}
      </div>
    </div>
  </div>
</template>

<script>
import Grapes from '@/components/Grapes.vue'

export default {
  name: 'Game1v1',
  components: {
    Grapes
  },
  props: {
    gameSettings: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    player1: {
      name: '',
      score: 0
    },
    player2: {
      name: '',
      score: 0
    },
    searchingPlayerId: 2,
    linesNum: 6,
    targetGrape: null,
    gameStep: 'selectGrape',
    willLose: false,
    grapesNum: null,
    eatenGrapes: 0,
    hintHeight: 20
  }),
  mounted () {
    this.player1.name = this.gameSettings.player1
    this.player2.name = this.gameSettings.player2

    this.grapesNum = this.$refs.grapes.grapes.length

    this.setHintHeight()
  },
  computed: {
    searchingPlayer () {
      return this['player' + this.searchingPlayerId]
    },
    selectingPlayer () {
      return this['player' + (3 - this.searchingPlayerId)]
    }
  },
  methods: {
    setHintHeight () {
      this.hintHeight = this.$refs.hintWrapper.clientHeight
    },
    selectGrape (key) {
      this.targetGrape = key
    },
    startSearching () {
      this.gameStep = 'searching'
    },
    invertSearchingPlayer () {
      this.searchingPlayerId = 3 - this.searchingPlayerId
    },

    eatGrape (key) {
      this.eatenGrapes++
      if (key === this.targetGrape) {
        this.willLose = true
        this.searchingPlayer.score++
        if (this.eatenGrapes >= this.grapesNum - 2) {
          this.invertSearchingPlayer()
          this.gameStep = 'victory'
        }
      } else {
        if (this.willLose) {
          this.gameStep = 'piou'
          this.willLose = false
          this.targetGrape = null
        } else {
          this.searchingPlayer.score++
          if (this.eatenGrapes >= this.grapesNum - 1) { // If the before-last has been eaten and is not loosing
            this.gameStep = 'victory'
          }
        }
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
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 100px;
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
