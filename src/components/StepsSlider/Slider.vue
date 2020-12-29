<template>
  <div class="steps-slider" @click="goToStep(1)">
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
      steps: []
    }
  },
  methods: {
    goToStep (i) {
      this.selectedIndex = i

      this.steps.forEach((step, index) => {
        step.opacity = (index === i) ? 1 : 0
        if (index < i) {
          step.translateImage = '-100%'
        } else if (index > i) {
          step.translateImage = '100%'
        } else {
          step.translateImage = 0
        }
      })
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
