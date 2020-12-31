<template>
  <div class="rules">
    <Slider class="slider">

      <Step>
        <template v-slot:image>
          <DangerIcon class="danger-icon" width="50%" height="100%" />
        </template>
        <template v-slot:description>
          <div class="description"><p v-html="$t('gamerules.step1')"></p></div>
        </template>
      </Step>

      <Step>
        <template v-slot:image>
          <img src="@/assets/img/step2.svg" alt="grape" class="img-step-2">
        </template>
        <template v-slot:description>
          <div class="description"><p v-html="$t('gamerules.step2')"></p></div>
        </template>
      </Step>

      <Step>
        <template v-slot:image>
          <TrappedGrape class="img-step-3" />
        </template>
        <template v-slot:description>
          <div class="description"><p v-html="$t('gamerules.step3')"></p></div>
        </template>
      </Step>

      <Step>
        <template v-slot:image>
          <EatGrape class="img-step-3" />
        </template>
        <template v-slot:description>
          <div class="description"><p v-html="$t('gamerules.step4')"></p></div>
        </template>
      </Step>

      <Step>
        <template v-slot:image>
          <FillGlass />
        </template>
        <template v-slot:description>
          <div class="description"><p v-html="$t('gamerules.step5')"></p></div>
        </template>
      </Step>

      <Step>
        <template v-slot:image>
          <h2 class="piou-text">
            <span>P</span>
            <span>i</span>
            <span>o</span>
            <span>u</span>
            <span>!</span>
          </h2>
        </template>
        <template v-slot:description>
          <div class="description"><p v-html="$t('gamerules.step6')"></p></div>
        </template>
      </Step>

      <Step>
        <template v-slot:image>
          <img src="@/assets/img/restart.svg" alt="grape" class="img-step-2">
        </template>
        <template v-slot:description>
          <div class="description"><p v-html="$t('gamerules.step7')"></p></div>
        </template>
      </Step>

      <Step>
        <template v-slot:image>
          <img src="@/assets/img/glass-full.svg" alt="glass" class="img-step-2">
        </template>
        <template v-slot:description>
          <div class="description"><p v-html="$t('gamerules.step8')"></p></div>
        </template>
      </Step>

      <Step>
        <template v-slot:image>
          <h2 class="variants-title">{{ $t('gamerules.step9') }}</h2>
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
import FillGlass from '@/components/rules/FillGlass'

export default {
  name: 'Rules',
  components: {
    FillGlass,
    EatGrape,
    TrappedGrape,
    DangerIcon,
    Step,
    Slider
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/globals";

.rules {
  position: fixed;
  top: 90px;
  left: 0px;
  bottom: 30px;
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
.piou-text {
  font-weight: bold;
  font-size: 15vw;
  color: $theme-color1;
  span {
    display: inline-block;
    animation: letter 4s infinite $transition-easing;

    @for $i from 2 through 5 {
      &:nth-child(#{$i}) {
        animation-delay: ($i - 1) * .05s;
      }
    }
  }
  @keyframes letter {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    20% {
      transform: none;
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    90% {
      opacity: 0;
    }
    to {
      opacity: 0;
    }
  }
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
  display: flex;
  align-items: flex-end;
  height: 100%;
}
.variants-title {
  padding: 40px;
  align-self: flex-start;
  margin: 0;
  font-size: 30px;
  color: $theme-color1;
}
.img-glass {
  width: 40%;
}
.variants {
  margin: 0;
  padding: 0 40px 0 80px;
  font-size: 18px;
}

</style>
