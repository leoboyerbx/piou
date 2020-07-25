<template>
  <div>
    <Content class="game-selector">
      <h1>{{ $t('ui.selectGameMode') }}</h1>
      <div class="links">
        <router-link to="/1v1" class="btn btn-theme list-link"><VersusIcon class="icon" width="40" height="40" />
          {{ $t('ui.gameMode.versus') }}</router-link>
        <router-link to="/group" class="btn btn-theme list-link"><GroupIcon class="icon" width="40" height="40" />
          {{ $t('ui.gameMode.group') }}</router-link>
      </div>
    </Content>
  </div>
</template>

<script>
import Content from '@/components/Content.vue'
import GroupIcon from '@/icons/GroupIcon'
import VersusIcon from '@/icons/VersusIcon'

export default {
  name: 'GameSelector',
  components: {
    VersusIcon,
    GroupIcon,
    Content
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
  @import '@/scss/globals';

  .game-selector {
    text-align: center;
    margin-left: 20px;
    margin-right: 20px;
    padding-top: 15px;
    color: $theme-grey-dark;

    .list-link {
      display: flex;
      position: relative;
      align-items: center;
      font-size: 1.2em;
      margin-bottom: 10px;

      .icon {
        margin-right: 20px;
      }
    }
  }
</style>
