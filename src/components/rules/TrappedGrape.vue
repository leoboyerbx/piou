<template>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 400 400" style="enable-background:new 0 0 400 400;" xml:space="preserve">
<g>
<g>
<path class="st0" d="M269.6,15.6l-66.2,66.5c0,0-1.7-35.5,15.1-52.3S269.6,15.6,269.6,15.6z"/>
<path class="st1" d="M203.3,82l66.2-66.5c0,0,1.7,35.5-15.1,52.3C237.7,84.5,203.3,82,203.3,82z"/>
<path class="st2" d="M195,28.2h4.1c3.3,0,5.9,2.7,5.9,5.9v72c0,3.3-2.7,5.9-5.9,5.9H195c-3.3,0-5.9-2.7-5.9-5.9v-72
  C189.1,30.8,191.7,28.2,195,28.2z"/>
</g>
</g>
<g>
<circle class="st3" cx="160.2" cy="119.1" r="39"/>
  <circle class="st4" cx="242.3" cy="119.1" r="39"/>

  <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -147.5937 193.8334)" class="trapped" cx="160.2" cy="275.1" rx="39" ry="39"/>
  <circle class="st4" cx="242.3" cy="275.1" r="39"/>
  <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -56.3687 258.1395)" class="st5" cx="283.4" cy="197.1" rx="39" ry="39"/>
  <circle class="st4" cx="116.6" cy="197.1" r="39"/>
  <circle class="st5" cx="199.6" cy="197.1" r="39"/>
  <circle class="st5" cx="199.6" cy="355.6" r="39"/>
</g>
</svg>
</template>

<script>
export default {
  name: 'TrappedGrape'
}
</script>

<style scoped lang="scss">
.st0{fill:#07594D;}
.st1{fill:#2F6F4D;}
.st2{fill:#8E6939;}
.st3{fill:#5D73D8;}
.st4{fill:#778DE0;}
.st5{fill:#3560BF;}

.trapped {
  fill: #5D73D8;
  animation: trapped .5s alternate infinite;
}
@keyframes trapped {
  to {
    fill: #E94444;
  }
}
</style>
