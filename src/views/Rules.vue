<template>
  <div class="rules">
    <Slider class="slider">

      <Step>
        <template v-slot:image>
          <DangerIcon class="danger-icon" width="50%" height="auto" />
        </template>
        <template v-slot:description>
          <p class="description" v-html="$t('gamerules.step1')"></p>
        </template>
      </Step>

      <Step>
        <template v-slot:image>
          <img src="@/assets/img/step2.svg" alt="grape" class="img-step-2">
        </template>
        <template v-slot:description>
          <p class="description" v-html="$t('gamerules.step2')"></p>
        </template>
      </Step>

      <Step>
        <template v-slot:image>
          <TrappedGrape class="img-step-3" />
        </template>
        <template v-slot:description>
          <p class="description" v-html="$t('gamerules.step3')"></p>
        </template>
      </Step>

      <Step>
        <template v-slot:image>
          <EatGrape class="img-step-3" />
        </template>
        <template v-slot:description>
          <p class="description" v-html="$t('gamerules.step4')"></p>
        </template>
      </Step>

      <Step>
        <template v-slot:image>
          <div class="placeholder red"></div>
        </template>
        <template v-slot:description>
          <p class="description" v-html="$t('gamerules.step5')"></p>
        </template>
      </Step>

      <Step>
        <template v-slot:image>
          <div class="placeholder red"></div>
        </template>
        <template v-slot:description>
          <p class="description" v-html="$t('gamerules.step6')"></p>
        </template>
      </Step>

      <Step>
        <template v-slot:image>
          <div class="placeholder red"></div>
        </template>
        <template v-slot:description>
          <p class="description" v-html="$t('gamerules.step7')"></p>
        </template>
      </Step>

      <Step>
        <template v-slot:description>
          <h2>{{ $t('gamerules.step8') }}</h2>
          <ul class="variants">
            <li v-for="variant in $t('gamerules.variants')" :key="variant">{{ variant }}</li>
          </ul>
        </template>
      </Step>

    </Slider>
  </div>
</template>

<script>

import Slider from '@/components/StepsSlider/Slider'
import Step from '@/components/StepsSlider/Step'
import DangerIcon from '@/components/rules/DangerIcon'
import TrappedGrape from '@/components/rules/TrappedGrape'
import EatGrape from '@/components/rules/EatGrape'
export default {
  name: 'Rules',
  components: {
    EatGrape,
    TrappedGrape,
    DangerIcon,
    Step,
    Slider
  },
  created () {
    console.log(this.$t('gamerules'))
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/globals";

.rules {
  position: fixed;
  top: 90px;
  left: 0px;
  bottom: 0;
  right: 0;
}

.danger-icon {
  color: $theme-grey-dark;
}
.img-step-2 {
  width: 50%;
}
.img-step-3 {
  width: 50%;
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
  font-size: 18px;
}

</style>
