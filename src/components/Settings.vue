<template>
    <div id="settings">
        <div class="settings-fields">
          <form @submit.prevent="startGame">
            <h1 v-if="title">{{ title }}</h1>
            <!--<h1>Who's playing ?</h1>-->
            <div v-for="field in fields" :key="field.name" class="settings-field">

              <div v-if="field.type === 'input'" class="input-container settings-field">
                <input v-model="fieldsValues[field.name]" :type="field.inputType" :id="field.name" :required="field.required" :min="field.min || ''"  />
                <label :for="field.name">{{ field.label }}</label>
                <div class="bar"></div>
              </div>
              <vue-select v-else-if="field.type === 'select'" :options="['hey', 'toto']" class="settings-field"></vue-select>
              <p v-else-if="field.type === 'vs'" class="vs">VS</p>
              <p v-else-if="field.type === 'p'" :class="field.class">VS</p>
            </div>
            <div class="buttons">
              <router-link to="/select-game" class="btn btn-light">Back</router-link>
              <button class="btn btn-theme" type="submit">Start</button>
            </div>
          </form>
        </div>
    </div>
</template>

<script>
import VueSelect from '@/components/Select'

export default {
  name: 'Settings',
  components: {
    VueSelect
  },
  props: {
    fields: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: false
    }
  },
  data () {
    const fieldsValues = {}
    for (const field of this.fields) {
      if (field.type === 'input') {
        fieldsValues[field.name] = field.initial || ''
      }
    }

    return {
      fieldsValues
    }
  },
  methods: {
    startGame () {
      this.$emit('start-game', this.fieldsValues)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/scss/globals";

  .settings-fields {
    position: absolute;
    height: 100%;
    width: 100%;
    margin-bottom: 20px;

    .settings-field {
      width: 100%;
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 60px 45px;
    }
    .vs {
      font-weight: bold;
      font-style: italic;
      text-transform: uppercase;
      font-size: 1.5em;
      margin: 0;
      color: $theme-color1;
    }
    h1 {
      margin-bottom: 40px;
      text-align: left;
      width: 100%;
    }
    button {
      margin: 0 10px;
    }
    .buttons {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      padding: 0 -10px;
    }
  }
</style>
