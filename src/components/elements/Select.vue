<template>
  <div style="width: 100%;">
    <div class="label">
      {{ label }}
    </div>
    <div class="vue-select" @click="toggleDropdown" :class="direction">
      <span class="selected-option">{{ renderedPlaceholder }}
        <svg width="24" height="24" viewBox="0 0 24 24" class="arrow" :class="[ direction, { reversed: showDropdown } ]">
          <path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"></path>
        </svg>
      </span>
      <transition name="slide">
        <div class="dropdown-options-container" :class="[ { 'h-2' : options.length < 3 }, direction ]" v-show="showDropdown">
          <div class="dropdown-options" v-for="option in options" :class="{'selected': option === selected }" :key="option.value">
            <div class="dropdown-options--cell" @click="selectOption(option)"><span class="option-text">{{ option.name }}</span></div>
          </div>
        </div>
      </transition>
      <input :value="selected.value" type="text" required class="select-locker" />
    </div>
    <div class="hint">{{ selected.hint }}</div>
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
    value: {},
    placeholder: {
      default: function () {
        return this.$t('ui.selectOption')
      },
      type: String
    },
    defaultHint: {
      type: String
    },
    label: {
      type: String
    },
    watchLocaleUpdate: {
      type: Boolean,
      default: true
    },
    maxHeight: {
      type: Number,
      default: 150
    },
    direction: {
      type: String,
      default: 'down'
    }
  },
  data () {
    return {
      selected: {
        hint: this.defaultHint
      },
      showDropdown: false,
      renderedPlaceholder: this.placeholder
    }
  },
  created () {
    if (this.watchLocaleUpdate) {
      this.unsubscribe = this.$store.subscribe((mutation) => {
        if (mutation.type === 'setLocale') {
          this.$nextTick(() => {
            this.bindValueToProp()
          })
        }
      })
    }
  },
  destroyed () {
    if (this.watchLocaleUpdate) {
      this.unsubscribe()
    }
  },
  mounted () {
    this.bindValueToProp()
  },
  watch: {
    value () {
      this.bindValueToProp()
    }
  },
  computed: {
    dropdownHeight () {
      if (this.showDropdown) {
        console.log(this.maxHeight, this.options.length * 50)
        return Math.min(
          this.maxHeight, this.options.length * 50
        ) + 'px'
      }
      return 0
    }
  },
  methods: {
    toggleDropdown () {
      this.showDropdown = !this.showDropdown
    },
    bindValueToProp () {
      if (this.value) {
        this.selectOption(this.options.find(option => option.value === this.value), false)
      }
    },
    selectOption (option, emit = true) {
      this.selected = option
      this.renderedPlaceholder = option.name
      this.$emit('update', this.selected.value)
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

  .label {
    font-size: .9em;
    color: #9d9d9d;
    margin-top: 20px;
  }

  .hint {
    font-size: .8em;
    color: #9d9d9d;
    font-style: italic;
    border-left: solid #9d9d9d 1px;
    padding-left: 10px;
    margin: 0 10px 20px 20px;
  }

  .vue-select {
    color: $vue-navy;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    margin: 10px auto 10px;
    cursor: pointer;
    user-select: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.06);
    border: none;
    transition: all .4s $transition-easing;
    position: relative;

    display: flex;
    flex-direction: column;

    .selected-option {
      @include ellipsis();
      display: inline-block;
      padding: 15px 50px 15px 15px;
      width: 100%;
      position: relative;
      box-sizing: border-box;
      transition: all .4s $transition-easing;
      user-select: none;

      &:hover {
        color: rgba(0,0,0,.45);
      }

      svg {
        fill: $vue-teal;
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
        transition: all .3s $transition-easing;
        &:hover {
          fill: darken($vue-teal, 15%);
        }

        &.down.reversed, &.up:not(.reversed) {
          transform: translateY(-50%) rotate(180deg);
        }
      }
    }
    .select-locker {
      position: absolute;
      left: 0;
      bottom: 0;
      opacity: 0;
      z-index: -1;
      user-select: none;
    }
  }
  .dropdown-options-container {
    overflow-y: scroll;
    user-select: none;
    height: 150px;
    &.up {
      order: -1
    }
  }
  .h-2 {
    height: 100px;
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
