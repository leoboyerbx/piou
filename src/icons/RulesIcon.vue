<template>
  <IconBase :height="height"
            :width="width"
            :icon-color="iconColor">
<path d="M50,8H40c0-4.4-3.6-8-8-8s-8,3.6-8,8H14c-3.3,0-6,2.7-6,6v44c0,3.3,2.7,6,6,6h36c3.3,0,6-2.7,6-6V14C56,10.7,53.3,8,50,8z
M20,53c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S21.7,53,20,53z M20,41c-1.7,0-3-1.3-3-3c0-1.7,1.3-3,3-3s3,1.3,3,3
C23,39.7,21.7,41,20,41z M20,29c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S21.7,29,20,29z M32,5c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3
S30.3,5,32,5z M48,51c0,0.5-0.4,1-1,1H29c-0.5,0-1-0.4-1-1v-2c0-0.5,0.4-1,1-1h18c0.5,0,1,0.4,1,1V51z M48,39c0,0.5-0.4,1-1,1H29
c-0.5,0-1-0.4-1-1v-2c0-0.5,0.4-1,1-1h18c0.5,0,1,0.4,1,1V39z M48,27c0,0.5-0.4,1-1,1H29c-0.5,0-1-0.4-1-1v-2c0-0.5,0.4-1,1-1h18
c0.5,0,1,0.4,1,1V27z"/>
  </IconBase>
</template>
<script>

import IconBase from '@/icons/IconBase'
export default {
  name: 'RulesIcon',
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
