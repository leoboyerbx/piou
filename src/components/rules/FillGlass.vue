<template>
  <Glass class="glass"
         :progress="currentProgress"
        :annotation="currentAnnotation"
  />
</template>

<script>
import Glass from '@/components/elements/Glass'
export default {
  name: 'FillGlass',
  components: { Glass },
  data: () => ({
    steps: [
      {
        progress: 0,
        annotation: 0
      },
      {
        progress: 0.2,
        annotation: 1
      },
      {
        progress: 0.4,
        annotation: 2
      },
      {
        progress: 0.6,
        annotation: 3
      },
      {
        progress: 0.8,
        annotation: 4
      }
    ],
    currentStep: 0
  }),
  created () {
    this.interval = setInterval(() => {
      if (this.currentStep >= this.steps.length - 1) {
        this.currentStep = 0
      } else {
        this.currentStep++
      }
    }, 1000)
  },
  destroyed () {
    clearInterval(this.interval)
  },
  computed: {
    currentProgress () {
      return this.steps[this.currentStep].progress
    },
    currentAnnotation () {
      return this.steps[this.currentStep].annotation.toString()
    }
  }
}
</script>

<style scoped>
.glass {
  height: auto;
  width: 40%;
}
</style>
