<template>
  <div
    class="steps-slider"
    v-touch:swipe.left="onSwipeLeft"
    v-touch:swipe.right="onSwipeRight"
    v-touch:moved="onTouchStart"
    v-touch:moving="onTouchMove"
    v-touch:end="onTouchEnd"
  >
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'Slider',
  components: {
  },
  created () {
    this.steps = this.$children
  },
  mounted () {
    this.goToStep(0)
  },
  data () {
    return {
      selectedIndex: 0,
      steps: [],
      dragStartX: null,
      clientWidth: 0,
      triggeredTouchEnd: false
    }
  },
  methods: {
    onTouchStart (e) {
      this.dragStartX = e.changedTouches[0].screenX
      this.setTabsTransition(false)
      this.clientWidth = this.$el.clientWidth
      this.triggeredTouchEnd = false
    },
    onTouchMove (e) {
      const screenX = e.changedTouches[0].screenX
      this.touchTranslation(screenX - this.dragStartX)
    },
    onTouchEnd (e) {
      this.setTabsTransition(true)
      const screenX = e.changedTouches[0].screenX
      let stepToGo = this.selectedIndex
      const deltaX = screenX - this.dragStartX
      if (Math.abs(deltaX) > this.clientWidth / 2) {
        stepToGo -= Math.sign(deltaX)
      }

      stepToGo = Math.max(0, stepToGo)
      stepToGo = Math.min(this.steps.length - 1, stepToGo)

      if (stepToGo !== this.selectedIndex) this.triggeredTouchEnd = true
      this.goToStep(stepToGo)
      console.log('touchend')
      this.dragStartX = null
    },

    onSwipeLeft (e) {
      if (!this.triggeredTouchEnd) {
        console.log('swipe ', e)
        this.goToStep(Math.min(this.steps.length - 1, this.selectedIndex + 1))
        this.triggeredTouchEnd = false
      }
    },
    onSwipeRight (e) {
      if (!this.triggeredTouchEnd) {
        console.log('swipe ', e)
        this.goToStep(Math.max(0, this.selectedIndex - 1))
        this.triggeredTouchEnd = false
      }
    },

    touchTranslation (val) {
      const progress = val / this.clientWidth
      this.steps.forEach((step, index) => {
        if (index === this.selectedIndex) {
          if (
            (index > 0 && progress > 0) ||
            (index < this.steps.length - 1 && progress < 0)
          ) {
            step.opacity = 1 - (Math.abs(progress) * 2)
          }
          step.translateImage = val + 'px'
        } else if (index === this.selectedIndex + 1) {
          if (progress < 0) {
            step.opacity = Math.abs(progress) - 0.5
          }
          step.translateImage = ' calc(' + val + 'px + 100%) '
        } else if (index === this.selectedIndex - 1) {
          if (progress > 0) {
            step.opacity = Math.abs(progress) - 0.5
          }
          step.translateImage = ' calc(' + val + 'px - 100%) '
        }
      })
    },
    goToStep (i) {
      this.selectedIndex = i

      this.steps.forEach((step, index) => {
        step.isActive = false
        step.opacity = (index === i) ? 1 : 0
        if (index < i) {
          step.translateImage = '-100%'
        } else if (index > i) {
          step.translateImage = '100%'
        } else {
          step.translateImage = 0
          step.isActive = true
        }
      })
    },
    setTabsTransition (set) {
      this.steps.forEach(step => { step.noTransition = !set })
    }
  }
}
</script>

<style scoped lang="scss">
.steps-slider {
  height: 100%;
  position: relative;
  overflow: hidden;
  .step {
    height: 90%;
  }
}
</style>
