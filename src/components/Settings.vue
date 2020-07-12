<template>
  <div id="settings">
      <div class="settings-fields">
        <form @submit.prevent="startGame">
          <h1>Who's playing ?</h1>
          <div class="input-container">
            <input v-model="player1" type="text" id="player1" required="required" />
            <label for="player1">Player 1</label>
            <div class="bar"></div>
          </div>
          <p class="vs">VS</p>
          <div class="input-container">
            <input v-model="player2" type="text" id="player2" required="required" />
            <label for="player2">Player 2</label>
            <div class="bar"></div>
          </div>
          <div class="input-container">
            <input v-model="linesNum" type="number" min="4" id="player2" required="required" />
            <label for="player2">Number of lines</label>
            <div class="bar"></div>
          </div>
          <button class="btn btn-theme" type="submit">Start</button>
        </form>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Settings',
  data: () => ({
    player1: '',
    player2: '',
    linesNum: 6
  }),
  methods: {
    startGame () {
      const { player1, player2, linesNum } = this
      this.$emit('start-game', {
        player1,
        player2,
        linesNum: parseInt(linesNum)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/scss/globals";

  .settings-fields {
    position: absolute;
    height: 100%;
    width: 100%;

    form {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .vs {
      font-weight: bold;
      font-style: italic;
      text-transform: uppercase;
      font-size: 1.5em;
      margin: 0;
      color: $theme-color1;
    }
    h1 {
      margin-bottom: 40px;
    }
    button {
      margin-top: 20px;
    }
  }
</style>
