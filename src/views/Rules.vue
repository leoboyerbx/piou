<template>
  <div class="rules">
    <Slider>
      <Step>
        <template v-slot:image>
          <div class="placeholder"></div>
        </template>
        <template v-slot:description>
          <p class="description">L'abus d'alcool est dangereux pour la santé. En poursuivant, vous confirmez être responsable des éventuelles conséquences que pourrait engendrer l'utilisation de Piou.</p>
        </template>
      </Step>
      <Step>
        <template v-slot:image>
          <div class="placeholder red"></div>
        </template>
        <template v-slot:description>
          <p class="description">Eius facilis fugiat id, magni molestias natus nobis nostrum pariatur perspiciatis quam repudiandae sequi unde vitae.</p>
        </template>
      </Step>
      <Step>
        <template v-slot:description>
          <p class="description">Eius facilis fugiat id, magni molestias natus nobis nostrum pariatur perspiciatis quam repudiandae sequi unde vitae.</p>
        </template>
      </Step>
    </Slider>
  </div>
</template>

<script>

import Slider from '@/components/StepsSlider/Slider'
import Step from '@/components/StepsSlider/Step'
export default {
  name: 'Rules',
  components: {
    Step,
    Slider
  }
}
</script>

<style scoped lang="scss">
.rules {
  position: fixed;
  top: 60px;
  left: 0px;
  bottom: 0;
  right: 0;
}

.placeholder {
  background-color: #2d374a;
  width: 150px;
  height: 150px;
  &.red {
    background-color: #ff6633;
  }
  &.green {
    background-color: #33ffcc;
  }
}
.description {
  padding: 0 30px;
  margin: 0;

}

</style>
