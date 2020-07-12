<template>
  <div id="grapes">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" :viewBox="viewBox" style="overflow:visible;enable-background:new 0 0 687 840;" xml:space="preserve">
    <circle v-for="grape in grapes" class="grape" :class="grape.colorClass" :key="grape.key" :cx="grape.cx" :cy="grape.cy" :r="grapeRad" />
</svg>
  </div>
</template>

<script>
const pickRandom = array => (array[Math.floor(Math.random() * array.length)])

export default {
  name: 'Grapes',
  props: {
    linesNum: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      grapeRad: 20,
      margin: 1
      // linesNum: 5
    }
  },
  computed: {
    grapeDiam () {
      return this.grapeRad * 2
    },
    nMax () {
      return (this.linesNum - 1)
    },
    viewBox () {
      const xMax = (this.nMax * this.grapeDiam) + ((this.nMax - 1) * this.margin)
      const yMax = this.linesNum * this.grapeDiam
      return `0 0 ${xMax} ${yMax}`
    },
    grapes () {
      const grapes = []
      for (let i = 1; i <= this.linesNum; i++) {
        const n = (i === this.linesNum) ? this.linesNum - 2 : i
        const lineY = this.grapeRad + (this.linesNum - i) * this.grapeDiam

        const offset = ((this.nMax - n) * this.grapeRad + (this.nMax - n - 1) * this.margin / 2)
        // if (isOdd(n)) offset += this.grapeRad + (this.margin/2)

        for (let g = 0; g < n; g++) {
          grapes.push({
            key: `${i}${g}`,
            cx: this.grapeRad + g * (this.grapeDiam + this.margin) + offset,
            cy: lineY,
            colorClass: pickRandom(['color1', 'color2', 'color0'])
          })
        }
      }
      return grapes
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/scss/globals';

.color0{fill: $theme-color1;}
.color1{fill: $theme-color2;}
.color2{fill: $theme-color3;}

#grapes {
  width: 100%;

  svg {
    width: 100%;
  }
  .grape {
    transform-origin: 0 0;
    animation: scalein .3s ease-out;
  }
  @keyframes scalein{
    from {
      transform: scale3D(0, 0, 0);
    }
  }
}
</style>
