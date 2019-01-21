<template>
  <div @click="Play">
    <div class="nb">{{number + 1}}</div>
    <div class="floor1">
      {{item.musicName}}
    </div>
    <div class="floor2">
      <span style="font-size: 15px;color: rgba(0,0,0,0.5)">{{item.singerName}}</span>
      <span style="float: right;margin-right: 10px;color: rgba(0,0,0,0.3);">{{formatTime}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'musicItem',
  props: ['item', 'number'],
  methods: {
    Play () {
      this.$router.push({name: 'Play', params: {music: this.item}})
    }
  },
  computed: {
    formatTime () {
      let time = this.item.time / 1000
      return parseInt(time / 60) + ':' + ('0' + parseInt(time % 60)).slice(-2)
    }
  }
}
</script>

<style scoped>
  .nb{
    vertical-align: middle;
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 18px;
    width: 12%;
    display: inline-block;
    color: rgba(0,0,0,0.3);
  }
  .floor2{
    vertical-align: middle;
    height: 30px;
    line-height: 30px;
    width: 88%;
    margin-left: 12%;
    border-bottom: 1px solid rgba(0,0,0,0.3);
  }
  .floor1{
    width: 80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 30px;
    line-height: 30px;
    margin-left: 12%;
    margin-top: -60px;
  }
</style>
