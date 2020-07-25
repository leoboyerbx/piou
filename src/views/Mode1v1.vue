<template>
  <div>
    <Content v-show="currentStep ==='settings'" class="settings-wrapper">
      <Settings
        @start-game="startGame"
        :fields="[
            {
              name: 'player1',
              type: 'input',
              inputType: 'text',
              label: $c($tc('ui.player')) + ' 1',
              initial: '',
              required: true
            },
            {
              name: 'vs',
              type: 'vs'
            },
            {
              name: 'player2',
              type: 'input',
              inputType: 'text',
              label: $c($tc('ui.player')) + ' 2',
              initial: '',
              required: true
            },
            {
              name: 'linesNum',
              type: 'input',
              inputType: 'number',
              label: $t('ui.linesNum'),
              min: '4',
              initial: 6,
              required: true
            }
          ]"
      />
    </Content>
    <Game1v1 @start-over="newGame" v-if="currentStep ==='playing'" :gameSettings="gameSettings" />
  </div>
</template>

<script>
import Content from '@/components/Content.vue'
import Settings from '@/components/Settings.vue'
import Game1v1 from '@/components/Game1v1'

export default {
  name: 'Mode1v1',
  components: {
    Content,
    Settings,
    Game1v1
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
