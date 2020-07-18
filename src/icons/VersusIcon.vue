<template>
  <IconBase :height="height"
            :width="width"
            :icon-color="iconColor">
    <g>
      <circle cx="13.33" cy="24" r="8"/>
      <circle cx="13.33" cy="24" r="5.33"/>
    </g>
    <g>
      <path d="M25.33,48h-24A1.34,1.34,0,0,1,0,46.67V41.93a7.1,7.1,0,0,1,6.92-7.26H19.75a7.1,7.1,0,0,1,6.92,7.26v4.74A1.34,1.34,0,0,1,25.33,48Z"/>
      <path d="M2.67,45.33H24v-3.4a4.44,4.44,0,0,0-4.25-4.6H6.92a4.44,4.44,0,0,0-4.25,4.6Z"/>
    </g>
    <g>
      <circle cx="50.67" cy="24" r="8"/>
      <circle cx="50.67" cy="24" r="5.33"/>
    </g>
    <g>
      <path d="M62.67,48h-24a1.34,1.34,0,0,1-1.34-1.33V41.93a7.1,7.1,0,0,1,6.92-7.26H57.08A7.1,7.1,0,0,1,64,41.93v4.74A1.34,1.34,0,0,1,62.67,48Z"/>
      <path d="M40,45.33H61.33v-3.4a4.44,4.44,0,0,0-4.25-4.6H44.25A4.44,4.44,0,0,0,40,41.93Z"/>
    </g>
    <path d="M32,34.67a1.33,1.33,0,0,1-1.19-.74l-4-8a1.33,1.33,0,1,1,2.38-1.19L32,30.35l2.81-5.61a1.33,1.33,0,1,1,2.38,1.19l-4,8a1.33,1.33,0,0,1-1.19.74Z"/>
  </IconBase>
</template>

<script>

import IconBase from '@/icons/IconBase'
export default {
  name: 'VersusIcon',
  components: {
    IconBase
  },
  props: {
    width: {
      type: [Number, String],
      default: 20
    },
    height: {
      type: [Number, String],
      default: 20
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>
