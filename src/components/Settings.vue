<template>
    <div id="settings">
        <div class="settings-fields">
          <form @submit.prevent="startGame">
            <h1 v-if="title">{{ title }}</h1>
            <!--<h1>Who's playing ?</h1>-->
            <div v-for="field in fields" :key="field.name">

              <div v-if="field.type === 'input'" class="input-container" >
                <input v-model="fieldsValues[field.name]" :type="field.inputType" :id="field.name" :required="field.required" :min="field.min || ''" />
                <label :for="field.name">{{ field.label }}</label>
                <div class="bar"></div>
              </div>
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

export default {
  name: 'Settings',
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

    form {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
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
