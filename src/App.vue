<template>
  <div id="app">
    <div>
      <input type="number" min="4" v-model="linesNum">
    </div>
    <Grapes :linesNum="linesInt" />
    <p>Hey</p>
  </div>
</template>

<script>
import Grapes from './components/Grapes.vue'

export default {
  name: 'App',
  components: {
    Grapes
  },
  data () {
    return {
      linesNum: '4'
    }
  },
  computed: {
    linesInt () {
      return parseInt(this.linesNum)
    }
  }
}
</script>

<style lang="scss">
@import "@/scss/globals";
@import "@/scss/buttons";

</style>
