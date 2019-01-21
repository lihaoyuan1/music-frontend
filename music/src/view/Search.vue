<template>
  <div class="search">
    <div class="back">
      <back ref="setMsg"></back>
    </div>
    <div class="search-box">
      <search-box @getMusicList="getMusicList"></search-box>
    </div>
    <div class="musicItem">
      <div style="text-align: center;color: rgba(0,0,0,0.4)" v-if="tip">
        <p>网易云版权限制</p>
        <p>部分歌曲可能无法正常播放</p>
      </div>
      <div style="text-align: center;color: rgba(0,0,0,0.4)" v-if="error">
        <p>搜索结果为空</p>
      </div>
      <template v-for="(item, index) of musicList">
        <music-item :item="item" :key="index" :number="index"></music-item>
      </template>
    </div>
  </div>
</template>

<script>
import searchBox from '../components/searchBox'
import musicItem from '../components/musicItem'
import back from '../components/back'
export default {
  name: 'Search',
  components: {searchBox, musicItem, back},
  data () {
    return {
      musicList: '',
      url: 'http://129.204.34.155:8081/music/search',
      tip: true,
      error: false
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    getMusicList (msg) {
      let sendData = {'musicName': msg}
      this.$http.post(this.url, sendData, {emulateJSON: true}).then(response => {
        this.tip = false
        if (response.data === '') {
          this.error = true
          this.musicList = ''
        } else {
          this.musicList = response.data
          this.error = false
        }
      }, error => {
        console.log(error)
      })
    }
  },
  activated () {
    this.$emit('isShowPlay', false)
    this.$refs.setMsg.setMsg('搜索')
  }
}
</script>

<style scoped>
  .musicItem{
    padding-top: 99px;
  }
  .search-box{
    width: 100%;
    max-width: 635px;
    position: fixed;
    top: 45px;
    padding: 5px 0;
    background-color: rgba(255, 255, 255, 1);
  }
  .back{
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 615px;
  }
  .search{
    width: 100%;
    height: 100%;
  }
</style>
