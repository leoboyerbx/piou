<template>
  <div class="vue-select" @click="toggleDropdown"><span class="selected-option">{{ placeholder }}
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"></path>
      </svg></span>
    <transition name="slide">
      <div class="dropdown-options-container" v-show="showDropdown">
        <div class="dropdown-options" v-for="option in options" :class="{'selected': option === selected}" :key="option">
          <div class="dropdown-options--cell" @click="selectOption(option)"><span class="option-text">{{ option }}</span></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'VueSelect',
  props: {
    options: {
      default: () => ([]),
      type: Array
    },
    placeholder: {
      default: 'Select an option',
      type: String
    }
  },
  data () {
    return {
      selected: 'select an option',
      showDropdown: false
    }
  },
  methods: {
    toggleDropdown () {
      this.showDropdown = !this.showDropdown
    },
    selectOption (option) {
      this.selected = option
      this.placeholder = option
      // inform parent (the form) of a selection so the model can be updated.
      this.$emit('interface', this.selected)
    }
  }
}
</script>

<style scoped lang="scss">
  @import '@/scss/globals.scss';

  $vue-navy: #2c3e50;
  $vue-navy-light: #3a5169;
  $vue-teal: $theme-color1;
  $vue-teal-light: $theme-color2;

  @mixin active-state() {
    background-color: lighten($theme-color2, 25);
    border: none;
  }

  @mixin ellipsis() {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .vue-select {
    color: $vue-navy;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    margin: 30px auto;
    cursor: pointer;
    user-select: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.06);
    border: none;
    transition: all .4s $transition-easing;

    .selected-option {
      @include ellipsis();
      display: inline-block;
      padding: 15px 50px 15px 15px;
      width: 100%;
      position: relative;
      box-sizing: border-box;
      transition: all .4s $transition-easing;

      &:hover {
        color: rgba(0,0,0,.45);
      }

      svg {
        fill: $vue-teal;
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
        transition: fill .6s $transition-easing;
        &:hover {
          fill: darken($vue-teal, 15%);
        }
      }
    }
  }

  .dropdown-options-container {
    overflow-y: scroll;
    height: 150px;
  }

  .dropdown-options--cell {
    padding: 15px;
    user-select: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
      @include active-state();
    }
  }
  .dropdown-options.selected {
    .dropdown-options--cell {
      @include active-state();
    }
  }

  .slide-enter-active, .slide-leave-active  {
    transition: height 150ms ease;
  }

  .slide-enter, .slide-leave-to {
    height: 0px;
  }
</style>
