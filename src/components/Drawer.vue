<template>
  <div class="drawer" :class="{ open }">
    <div class="drawer-wrapper">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Drawer',
  components: {
  },
  props: {
    open: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: () => ({
  }),
  computed: {
  },
  methods: {
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/scss/globals';

  .drawer {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 200;
  }
</style>
