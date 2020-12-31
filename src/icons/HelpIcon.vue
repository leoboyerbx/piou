<template>
  <IconBase :height="height"
            :width="width"
            :icon-color="iconColor">
  <path d="M32,0C14.3,0,0,14.3,0,32c0,17.7,14.3,32,32,32s32-14.3,32-32C64,14.3,49.7,0,32,0z M32,57.8C17.7,57.8,6.2,46.3,6.2,32
C6.2,17.7,17.7,6.2,32,6.2c14.3,0,25.8,11.5,25.8,25.8C57.8,46.3,46.3,57.8,32,57.8z M45.8,24.9c0,8.7-9.3,8.8-9.3,12v0.8
c0,0.9-0.7,1.5-1.5,1.5h-5.9c-0.9,0-1.5-0.7-1.5-1.5v-1.1c0-4.6,3.5-6.5,6.1-7.9c2.3-1.3,3.7-2.1,3.7-3.8c0-2.2-2.8-3.7-5.1-3.7
c-3,0-4.4,1.4-6.3,3.9c-0.5,0.7-1.5,0.8-2.2,0.3l-3.6-2.7c-0.7-0.5-0.8-1.4-0.3-2.1c3-4.5,6.9-7,13-7C39.1,13.4,45.8,18.4,45.8,24.9
z M37.4,46.5c0,3-2.4,5.4-5.4,5.4s-5.4-2.4-5.4-5.4c0-3,2.4-5.4,5.4-5.4S37.4,43.5,37.4,46.5z"/>
  </IconBase>
</template>
<script>

import IconBase from '@/icons/IconBase'
export default {
  name: 'HelpIcon',
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
    }
  }
}
</script>
