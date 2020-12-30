<template>
  <div>
    <Content v-show="currentStep ==='settings'" class="settings-wrapper">
      <Settings
        @start-game="startGame"
        :title="$t('ui.gameSettings')"
        :fields="[
            // {
            //   name: 'linesNum',
            //   type: 'input',
            //   inputType: 'number',
            //   label: $t('ui.linesNum'),
            //   min: '4',
            //   initial: 6,
            //   required: true
            // },
            {
              name: 'linesNum',
              type: 'select',
              label: $t('ui.linesNum'),
              required: true,
              value: 6,
              options: [
                {
                  value: 5,
                  name: $t('game.grapeSize.verysmall.name'),
                  hint: $t('game.grapeSize.verysmall.hint')
                },
                {
                  value: 6,
                  name: $t('game.grapeSize.small.name'),
                  hint: $t('game.grapeSize.small.hint')
                },
                {
                  value: 7,
                  name: $t('game.grapeSize.normal.name'),
                  hint: $t('game.grapeSize.normal.hint')
                },
                {
                  value: 8,
                  name: $t('game.grapeSize.big.name'),
                  hint: $t('game.grapeSize.big.hint')
                },
                {
                  value: 9,
                  name: $t('game.grapeSize.verybig.name'),
                  hint: $t('game.grapeSize.verybig.hint')
                },
                {
                  value: 10,
                  name: $t('game.grapeSize.huge.name'),
                  hint: $t('game.grapeSize.huge.hint')
                },
                {
                  value: 11,
                  name: $t('game.grapeSize.veryhuge.name'),
                  hint: $t('game.grapeSize.veryhuge.hint')
                }
              ]
            },
            {
              name: 'difficulty',
              type: 'select',
              label: $t('game.difficulty.label'),
              placeholder: $t('game.difficulty.placeholder'),
              defaultHint: $t('game.difficulty.hint'),
              required: true,
              value: '0.5',
              options: [
                {
                  value: '0.25',
                  name: $t('game.difficulty.easy.name'),
                  hint: $t('game.difficulty.easy.hint')
                },
                {
                  value: '0.5',
                  name: $t('game.difficulty.normal.name'),
                  hint: $t('game.difficulty.normal.hint')
                },
                {
                  value: '1',
                  name: $t('game.difficulty.difficult.name'),
                  hint: $t('game.difficulty.difficult.hint')
                },
                {
                  value: '2',
                  name: $t('game.difficulty.hardcore.name'),
                  hint: $t('game.difficulty.hardcore.hint')
                }
              ]
            },
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
