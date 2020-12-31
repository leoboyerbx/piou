<template>
  <div
    class="steps-slider"
    v-touch:swipe.left="onSwipeLeft"
    v-touch:swipe.right="onSwipeRight"
    v-touch:moved="onTouchStart"
    v-touch:moving="onTouchMove"
    v-touch:end="onTouchEnd"
  >
    <section ref="slides">
      <slot></slot>
    </section>
    <div class="controls">
      <a href="#"
         class="action"
         :class="{ hidden: selectedIndex === 0 }"
         @click="prevSlide"
      >
        <ChevronIcon direction="left" width="40" height="40" />
      </a>
      <a href="#"
         class="action"
         :class="{ play: selectedIndex >= steps.length - 1 }"
         @click="onClickNext"
      >
        <ChevronIcon direction="right" :play="this.selectedIndex >= this.steps.length -1" width="40" height="40" />
      </a>
    </div>
  </div>
</template>

<script>

import ChevronIcon from '@/icons/ChevronIcon'
export default {
  name: 'Slider',
  components: {
    ChevronIcon
  },
  created () {
  },
  mounted () {
    const steps = []
    this.$children.forEach(comp => {
      if (comp.$options.name === 'Step') {
        steps.push(comp)
      }
    })
    this.steps = steps
    this.goToStep(0)
  },
  data () {
    return {
      selectedIndex: 0,
      steps: [],
      dragStartX: null,
      clientWidth: 0,
      triggeredTouchEnd: false,
      minDeltaX: 10
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
      if (this.dragStartX !== null) {
        this.setTabsTransition(true)
        const screenX = e.changedTouches[0].screenX
        let stepToGo = this.selectedIndex
        const deltaX = screenX - this.dragStartX
        console.log(deltaX)
        if (Math.abs(deltaX) > this.clientWidth / 2) {
          stepToGo -= Math.sign(deltaX)
        }

        stepToGo = Math.max(0, stepToGo)
        stepToGo = Math.min(this.steps.length - 1, stepToGo)

        if (stepToGo !== this.selectedIndex) this.triggeredTouchEnd = true
        this.goToStep(stepToGo)
        this.dragStartX = null
      }
    },

    onSwipeLeft (e) {
      if (!this.triggeredTouchEnd) {
        this.goToStep(Math.min(this.steps.length - 1, this.selectedIndex + 1))
        this.triggeredTouchEnd = false
      }
    },
    onSwipeRight (e) {
      if (!this.triggeredTouchEnd) {
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
        step.toDisplay = false
        step.opacity = (index === i) ? 1 : 0
        if (index < i) {
          step.translateImage = '-100%'
          if (index === i - 1) {
            step.toDisplay = true
          }
        } else if (index > i) {
          step.translateImage = '100%'
          if (index === i + 1) {
            step.toDisplay = true
          }
        } else {
          step.translateImage = 0
          step.isActive = true
          step.toDisplay = true
        }
      })
    },
    setTabsTransition (set) {
      this.steps.forEach(step => { step.noTransition = !set })
    },
    nextSlide () {
      this.goToStep(Math.min(this.selectedIndex + 1), this.steps.length - 1)
    },
    prevSlide () {
      this.goToStep(Math.max(0, this.selectedIndex - 1))
    },
    onClickNext () {
      if (this.selectedIndex >= this.steps.length - 1) {
        this.$router.push('play')
      } else {
        this.nextSlide()
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/globals';

.steps-slider {
  height: 100%;
  position: relative;
  overflow: hidden;
  .step {
    height: calc(90% - 40px);
  }
  .controls {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 40px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    .action  {
      color: $theme-grey-dark;
      transition: all .2s;
      &:first-child {
        margin-right: 30px;
      }
      &.hidden {
        opacity: 0;
        pointer-events: none;
      }
      &.play {
        color: $theme-color1;
      }
    }
  }
}
</style>
