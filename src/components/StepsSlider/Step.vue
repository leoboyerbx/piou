<template>
  <div v-show="toDisplay" class="step" :style="{ pointerEvents: isActive ? 'all' : 'none' }">
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
      noTransition: false,
      isActive: false,
      toDisplay: false
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
  justify-content: space-between;
}
.slot {
  transition: all .3s $transition-easing;
}
.image {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
}
.description {
  min-height: 40%;
}
</style>
