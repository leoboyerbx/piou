<template>
  <div class="content">
      <slot />
  </div>
</template>

<script>

export default {
  name: 'Content'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .content {
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>
