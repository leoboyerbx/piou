<template>
  <div id="game">
    <div class="grapes-wrapper">
      <Grapes :lines="gameSettings.linesNum"
              :selectionMode="false"
              @eat="eatGrape"
              ref="grapes"
      />
    </div>
    <div class="piou-wrapper" :class="{visible: gameStep === 'piou' || gameStep === 'end'}">
      <transition name="slide">
        <div v-show="gameStep === 'piou'">piou !</div>
      </transition>
      <transition name="slide">
        <div v-show="gameStep === 'end'">PIOUU !</div>
      </transition>
    </div>
    <div class="hint-wrapper" ref="hintWrapper" :class="{ visible: ['piou', 'end'].includes(gameStep) }">
      <transition name="hint">
        <div class="hint" v-show="gameStep === 'piou'">
          <p><strong>Piou !</strong> You <i>eat <strong>{{ grapesToEat }}</strong> grapes</i> ;)</p>
          <div class="buttons">
            <button class="btn btn-light" @click="startOver">Start over</button>
            <button class="btn btn-theme" @click="continueGame">Continue</button>
          </div>
        </div>
      </transition>
      <transition name="hint">
        <div class="hint" v-show="gameStep === 'end'">
          <p><strong>Piou !</strong> You <i>eat <strong>all the grapes</strong> </i> ;)</p>
          <div class="buttons">
            <button class="btn btn-theme" @click="startOver">Start over</button>
          </div>
        </div>
      </transition>
      <div class="glass-wrapper">
        <Glass :progress="progress"
               :annotation="annotation" />
      </div>
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
    eatingProgress: 0,
    grapesToEat: 0
  }),
  mounted () {
    this.grapesNum = this.$refs.grapes.grapes.length
    this.targetRandomGrape()
    this.updateHintHeight()
  },
  computed: {
    progress () {
      return (this.eatingProgress / this.grapesNum)
    },
    annotation () {
      return this.eatingProgress === this.grapesNum ? ':o' : this.eatingProgress.toString()
    }
  },
  watch: {
    gameStep () {
      window.requestAnimationFrame(() => {
        this.updateHintHeight()
      })
    }
  },
  methods: {
    startSearching () {
      this.gameStep = 'searching'
    },
    targetRandomGrape () {
      this.targetGrape = this.$refs.grapes.randomGrape(true).key
      console.log('target grape: ' + this.targetGrape)
    },
    eatGrape (key) {
      this.eatenGrapes.push(key)
      this.eatingProgress++
      if (key === this.targetGrape) {
        if (this.eatenGrapes.length === this.grapesNum) {
          this.eatingProgress = this.grapesNum
          this.gameStep = 'end'
        } else {
          this.grapesToEat = this.eatingProgress
          this.gameStep = 'piou'
        }
      }
    },
    startOver () {
      this.$emit('start-over')
    },
    continueGame () {
      this.targetRandomGrape()
      this.gameStep = 'searching'
      this.eatingProgress = 0
    },
    updateHintHeight () {
      this.hintHeight = this.$refs.hintWrapper.clientHeight
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
    position: fixed;
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
      margin-top: 30%;
      text-align: center;
      transition: all .4s $transition-easing;
      /*transform: translate3d(100%, 0, 0);*/
    }

    &.visible {
      opacity: 1;
      pointer-events: all;
      div {
        transform: translate3d(0, 0, 0);
      }
    }
  }

  .hint-leave, .hint-leave-active, .hint-leave-to {
    transition-delay: .3s;
  }

  .hint-wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    transition: all .3s $transition-easing;
    transform: translateY(100%);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0);
    &.visible {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
      transform: translateY(0);
    }

    .hint {
      p {
        font-size: 1.1em;
        margin: 30px;
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
  .glass-wrapper {
    position: absolute;
    left: 5px;
    bottom: 100%;
    width: 30%;
    max-width: 200px;
    opacity: .8;
    pointer-events: none;
    transition: all .3s $transition-easing;
  }
</style>
