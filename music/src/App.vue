<template>
  <div id="app">
    <keep-alive>
      <router-view @isShowPlay="isShowPlay" @setUrl="setUrl" v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view @isShowPlay="isShowPlay" @setUrl="setUrl" v-if="!$route.meta.keepAlive"/>
    <div class="player" v-show="showPlayer">
      <audio ref="player" controls="controls" autoplay="autoplay" :src="url"></audio>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      showPlayer: false,
      url: ''
    }
  },
  methods: {
    isShowPlay (flag) {
      this.showPlayer = flag
    },
    setUrl (url) {
      if (this.url !== url) {
        this.url = url
      }
    }
  }
}
</script>

<style>
  .player audio{
    vertical-align: middle;
    width: 100%;
  }
  .player{
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 635px;
  }
  #app {
    width: 100%;
  }
</style>
