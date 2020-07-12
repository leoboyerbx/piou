<template>
  <div id="game">
    <div class="grapes-wrapper">
      <Grapes :linesNum="gameSettings.linesNum" />
    </div>
    <div id="hint-wrapper">
      Hello <br>
      hi
    </div>
  </div>
</template>

<script>
import Grapes from './Grapes.vue'

export default {
  name: 'Game',
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
    linesNum: 6,
    gamestep: 'p1choice'
  }),
  mounted () {
    this.player1.name = this.gameSettings.player1
    this.player2.name = this.gameSettings.player2
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/scss/globals";

#game {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.grapes-wrapper {
  width: 90%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: scroll;
  overflow-x: visible;
}

#hint-wrapper {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}
</style>
