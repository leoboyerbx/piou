<template>
  <div>
    <Content v-show="currentStep ==='settings'" class="settings-wrapper">
      <Settings
        @start-game="startGame"
        title="Game settings"
        :fields="[
            {
              name: 'linesNum',
              type: 'input',
              inputType: 'number',
              label: 'Number of lines',
              min: '4',
              initial: 6,
              required: true
            }
          ]"
      />
    </Content>
    <GameGroup @start-over="newGame" v-if="currentStep ==='playing'" :gameSettings="gameSettings" />
  </div>
</template>

<script>
import Content from '@/components/Content.vue'
import Settings from '@/components/Settings.vue'
import GameGroup from '@/components/GameGroup'

export default {
  name: 'ModeGroup',
  components: {
    GameGroup,
    Content,
    Settings
  },
  data () {
    return {
      currentStep: 'settings',
      linesNum: '4',
      gameSettings: {}
    }
  },
  computed: {
    linesInt () {
      return parseInt(this.linesNum)
    }
  },
  methods: {
    newGame () {
      this.setCurrentStep('settings')
    },
    startGame (gameSettings) {
      this.gameSettings = gameSettings
      this.setCurrentStep('playing')
    },
    setCurrentStep (step) {
      if (step === 'settings') this.$store.commit('topBar', 'default')
      if (step === 'playing') this.$store.commit('topBar', 'hidden')
      this.currentStep = step
    }
  }
}
</script>

<style lang="scss">
</style>
