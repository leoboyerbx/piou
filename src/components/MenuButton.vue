<template>
<div class="menu-button" @click="$emit('click', $event)" :class="{'menu-open': open }">
    <a class="menu-button-icon">
        <div class="h-bar"></div>
        <div class="h-bar"></div>
        <div class="h-bar"></div>
    </a>
</div>
</template>

<script>
export default {
  name: 'MenuButton',
  props: {
  },
  data: () => ({
    open: false
  }),
  computed: {
  }

}
</script>

<style scoped lang="scss">
@import '@/scss/globals';
.menu-button {
    position: relative;
    width: 40px;
    height: 30px;
  transform: scale(.8);

    .menu-button-icon {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .h-bar {
            width: 100%;
            height: 4px;
            background: $theme-grey-dark;
            border-radius: 10px;
        }
    }
}
</style>
