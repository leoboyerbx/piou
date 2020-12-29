<template>
  <IconBase :height="height"
            :width="width"
            :icon-color="iconColor">
<path d="M31.2,20.1L10.7,37v18.2c0,1,0.8,1.8,1.8,1.8l12.4,0c1,0,1.8-0.8,1.8-1.8V44.5c0-1,0.8-1.8,1.8-1.8h7.1c1,0,1.8,0.8,1.8,1.8
v10.6c0,1,0.8,1.8,1.8,1.8c0,0,0,0,0,0l12.4,0c1,0,1.8-0.8,1.8-1.8V37L32.9,20.1C32.4,19.7,31.7,19.7,31.2,20.1L31.2,20.1z
M63.5,31.6l-9.3-7.6V8.6c0-0.7-0.6-1.3-1.3-1.3h-6.2c-0.7,0-1.3,0.6-1.3,1.3v8.1l-9.9-8.2c-2-1.6-4.8-1.6-6.8,0L0.6,31.6
C0,32-0.1,32.9,0.4,33.5c0,0,0,0,0,0l2.8,3.4c0.5,0.6,1.3,0.6,1.9,0.2c0,0,0,0,0,0l26.1-21.5c0.5-0.4,1.2-0.4,1.7,0L59,37.1
c0.6,0.5,1.4,0.4,1.9-0.2c0,0,0,0,0,0l2.8-3.4C64.2,32.9,64.1,32,63.5,31.6C63.5,31.6,63.5,31.6,63.5,31.6L63.5,31.6z"/>
  </IconBase>
</template>
<script>

import IconBase from '@/icons/IconBase'
export default {
  name: 'HomeIcon',
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
