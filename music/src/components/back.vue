<template>
  <div class="back">
    <button @click="goBack">
      <svg class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1952" width="32" height="32">
        <path d="M778.666667 490.666667H296.533333l220.586667-220.16a21.333333 21.333333 0 0 0-30.293333-30.293334l-256 256a21.333333 21.333333 0 0 0 14.933333 36.266667h532.906667a21.333333 21.333333 0 0 0 0-42.666667zM338.346667 575.573333a21.333333 21.333333 0 0 0-30.293334 30.293334l178.346667 178.346666a21.333333 21.333333 0 0 0 30.293333-30.293333z" p-id="1953"></path>
      </svg>
    </button>
    <span style="color: rgba(255,255,255,1)">{{msg}}</span>
    <div class="toPlay" v-if="isShowToPlay">
      <to-play></to-play>
    </div>
  </div>
</template>

<script>
import toPlay from './toPlay'
export default {
  name: 'back',
  components: {toPlay},
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    setMsg (msg) {
      this.msg = msg
    }
  },
  computed: {
    isShowToPlay () {
      if (this.$route.path === '/Play') {
        return false
      } else {
        return this.$store.state.flag
      }
    }
  }
}
</script>

<style scoped>
  .toPlay{
    float: right;
  }
  .back button svg{
    vertical-align: middle;
    fill: rgba(255, 255, 255, 1);
  }
  .back button{
    background: none;
    border: none;
    outline: none;
  }
  .back{
    background-color: rgba(255, 0, 0, 1);
    width: 100%;
    height: 45px;
    line-height: 45px;
  }
</style>
