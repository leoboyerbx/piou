<template>
  <div class="choose-language">
    <form class="form">
      <div class="inputGroup" v-for="[key, language] of Object.entries(availableLanguages)" :key="key">
        <input :id="'radio_' + key" :value="key" v-model="currentLanguage" name="language" type="radio"/>
        <label :for="'radio_' + key">{{ language.name }}
<!--          <img v-if="language.flag" :src="language.flag" :alt="key.toUpperCase()" class="flag">-->
        </label>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  props: {

  },
  data () {
    return {
      availableLanguages: {
        en: {
          name: 'English'
        },
        fr: {
          name: 'Français'
        }
      },
      currentLanguage: 'en'
    }
  },
  computed: {
  },
  watch: {
    currentLanguage (newVal) {
      this.$emit('update', newVal)
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/globals.scss';

/* Styles des boutons radio du sélecteur de langue */
.inputGroup {
  background-color: #fff;
  display: block;
  margin: 10px 0;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  box-shadow: 0 0 15px rgba(0, 0, 0, .2);
}
.inputGroup label {
  padding: 25px 30px;
  width: 100%;
  display: block;
  text-align: left;
  color: #3C454C;
  cursor: pointer;
  position: relative;
  z-index: 2;
  transition: all .2s ease-out;
  overflow: hidden;
  font-size: .8em;
  text-transform: uppercase;
}
.inputGroup label:after {
  width: 28px;
  height: 28px;
  content: "";
  border: 2px solid #D1D7DC;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
  background-repeat: no-repeat;
  background-position: 2px 3px;
  border-radius: 50%;
  z-index: 2;
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  transition: all .2s ease-out;
}
.inputGroup input:checked ~ label {
  font-weight: 900;
}
.inputGroup input:checked ~ label:after {
  background-color: $theme-color2;
  border-color: $theme-color2;
}
.inputGroup input {
  width: 32px;
  height: 32px;
  order: 1;
  z-index: 2;
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  visibility: hidden;
}

.inputGroup .flag {
  position: absolute;
  top: 0;
  right: 82px;
  width: 30px;
  height: 100%;
  z-index: 3;
}
</style>
