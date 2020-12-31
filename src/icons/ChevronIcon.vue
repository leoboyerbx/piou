<template>
  <IconBase :height="height"
            :width="width"
            :icon-color="iconColor"
            :class="direction"
  >
  <path d="M17.1,0.5l-2.9,2.9c-0.7,0.7-0.7,1.8,0,2.5L40.3,32L14.2,58.2c-0.7,0.7-0.7,1.8,0,2.5l2.9,2.9c0.7,0.7,1.8,0.7,2.5,0
l30.3-30.3c0.7-0.7,0.7-1.8,0-2.5L19.5,0.5C18.8-0.2,17.7-0.2,17.1,0.5z"/>
    <transition name="fade">
      <rect v-if="play" x="13.7" y="4.7" width="7" height="54.5"/>
    </transition>
  </IconBase>
</template>
<script>

import IconBase from '@/icons/IconBase'
export default {
  name: 'ChevronIcon',
  components: {
    IconBase
  },
  props: {
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    },
    direction: {
      type: String,
      default: 'right'
    },
    play: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.bottom {
  transform: rotate(90deg);
}
.up {
  transform: rotate(-90deg);
}
.left {
  transform: rotate(180deg);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
