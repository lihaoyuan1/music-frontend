<template>
  <div class="nav-top">
    {{ tip }}
    <div class="toPlay" v-if="this.$store.state.flag">
      <to-play></to-play>
    </div>
  </div>
</template>

<script>
import toPlay from './toPlay'
export default {
  name: 'nav-top',
  components: {toPlay},
  data () {
    return {
      tip: '歌单'
    }
  },
  methods: {
    changeTop (msg) {
      this.tip = msg
    }
  }
}
</script>

<style scoped>
  .toPlay{
    float: right;
  }
  .nav-top{
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background-color: rgba(255, 0, 0, 1);
    color: rgba(255, 255, 255, 1);
  }
</style>
