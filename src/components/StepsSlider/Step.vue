<template>
  <div class="step">
    <div class="slot image"
         :style="{
            transform: `translateX(${translateImage})`,
            transition: noTransition ? 'none' : ''
          }">
      <slot name="image"></slot>
    </div>
    <div class="slot description"
        :style="{
          opacity,
          transition: noTransition ? 'none' : ''
        }">
      <slot name="description"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step',
  data () {
    return {
      translateImage: 0,
      opacity: 1,
      noTransition: false
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/globals.scss';

.step {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.slot {
  transition: all .3s $transition-easing;
}
.image {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
