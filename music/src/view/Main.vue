<template>
  <div id="main">
    <div class="nav-top">
      <nav-top ref="changeTop"></nav-top>
    </div>
    <div class="main-content">
      <keep-alive>
        <router-view @topMessage="topMessage" @isShowPlay="isShowPlay" v-if="$route.meta.keepAlive"/>
      </keep-alive>
      <router-view @topMessage="topMessage" @isShowPlay="isShowPlay" v-if="!$route.meta.keepAlive"/>
    </div>
    <div class="nav-bottom">
      <nav-bottom></nav-bottom>
    </div>
  </div>
</template>

<script>
import navTop from '../components/nav-top'
import navBottom from '../components/nav-bottom'
export default {
  name: 'Main',
  components: {navTop, navBottom},
  methods: {
    topMessage (msg) {
      this.$refs.changeTop.changeTop(msg)
    },
    isShowPlay (flag) {
      this.$emit('isShowPlay', flag)
    }
  }
}
</script>

<style scoped>
  .main-content{
    width: 100%;
    padding: 50px 0;
  }
  .nav-top{
    max-width: 635px;
    height: 50px;
    position: fixed;
    top: 0;
  }
  .nav-bottom{
    max-width: 635px;
    height: 50px;
    position: fixed;
    bottom: 0;
  }
  #main{
    width: 100%;
  }
</style>
