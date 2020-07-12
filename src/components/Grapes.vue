<template>
  <div id="grapes">
    <!-- Generator: Adobe Illustrator 24.2.1, SVG Export Plug-In  -->
<svg id="stalk" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173 115">
  <g>
    <path class="cls-1" d="M173,0,94,79.33S92,37,112,17,173,0,173,0Z"/>
    <path class="cls-2" d="M93.94,79.17l79-79.33s2,42.33-18,62.33S93.94,79.17,93.94,79.17Z"/>
    <rect class="cls-3" x="77" y="15" width="19" height="100" rx="9.5"/>
  </g>
</svg>

    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" :viewBox="viewBox" style="overflow:visible;enable-background:new 0 0 687 840;" xml:space="preserve">
    <circle @click="handleGrape(grape)" v-for="grape in grapes" class="grape" :class="[grape.colorClass, {visible: grape.visible, selected: grape.selected && selectionMode }]" :key="grape.key" :cx="grape.cx" :cy="grape.cy" :r="grapeRad" />
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
    },
    selectionMode: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      grapeRad: 20,
      margin: 3,
      grapes: []
      // linesNum: 5
    }
  },
  beforeMount () {
    const grapes = []
    for (let i = 1; i <= this.linesNum; i++) {
      const n = (i === this.linesNum) ? this.linesNum - 2 : i
      const lineY = this.grapeRad + (this.linesNum - i) * this.grapeDiam

      const offset = ((this.nMax - n) * this.grapeRad + (this.nMax - n - 1) * this.margin / 2) + this.margin / 2
      // if (isOdd(n)) offset += this.grapeRad + (this.margin/2)

      for (let g = 0; g < n; g++) {
        grapes.push({
          key: `${i}${g}`,
          cx: this.grapeRad + g * (this.grapeDiam + this.margin) + offset,
          cy: lineY,
          colorClass: pickRandom(['color1', 'color2', 'color0']),
          visible: true,
          selected: false
        })
      }
    }
    this.grapes = grapes
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
    }
  },
  methods: {
    grapeByKey (key) {
      this.grapes.forEach(grape => {
        if (grape.key === key) return grape
      })
    },

    clearSelection () {
      this.grapes.forEach(grape => {
        grape.selected = false
      })
    },

    handleGrape (grape) {
      if (this.selectionMode) {
        this.clearSelection()
        grape.selected = true
        this.$emit('select', grape.key)
      } else {
        grape.visible = false
        this.$emit('eat', grape.key)
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/scss/globals';

.cls-1{fill:#07594D;}
.cls-2{fill:#2F6F4D;}
.cls-3{fill:#8E6939;}

.color0{fill: $theme-color1;}
.color1{fill: $theme-color2;}
.color2{fill: $theme-color3;}

#grapes {
  width: 100%;

  svg {
    width: 100%;
  }
  #stalk {
    height: 60px;
  }
  .grape {
    display: none;
    &.visible {
      display: block;
    }
    &.selected {
      fill: $selection;
      display: block;
    }
  }
}
</style>
