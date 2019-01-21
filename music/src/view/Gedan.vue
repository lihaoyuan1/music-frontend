<template>
  <div class="gedan">
    <div class="back">
      <back ref="setMsg"></back>
    </div>
    <div class="top">
      <img :src="this.item.src">
      <div>
        <p>{{item.title}}</p>
        <p>{{item.author}}</p>
      </div>
    </div>
    <div class="musicItem">
      <div v-if="loading" style="text-align: center;padding-top: 10px">
        <span style="color: rgba(0,0,0,0.3)">加载中</span>
        <img src="https://s2.music.126.net/style/web2/img/loading.gif?c0b538c08f72519dcbb39afae3f7660e"
          style="vertical-align: middle">
      </div>
      <template v-for="(item, index) of musicList">
        <music-item :item="item" :key="index" :number="index"></music-item>
      </template>
    </div>
  </div>
</template>

<script>
import back from '../components/back'
import musicItem from '../components/musicItem'
export default {
  name: 'Gedan',
  components: {back, musicItem},
  data () {
    return {
      url: 'http://129.204.34.155:8081/music/playList',
      musicList: [],
      item: '',
      loading: ''
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
  },
  activated () {
    this.$refs.setMsg.setMsg('歌单')
    this.$emit('isShowPlay', false)
    if (this.$route.params.item === undefined && this.item === '') {
      this.$router.go(-1)
    } else {
      if (this.item !== this.$route.params.item && this.$route.params.item !== undefined) {
        this.item = this.$route.params.item
        this.musicList = []
        this.loading = true
        this.$http.get(this.url, {params: {id: this.$route.params.item.href}}, {emulateJSON: true}).then(response => {
          this.loading = false
          this.musicList = response.data
        }, error => {
          console.log(error)
        })
      }
    }
  }
}
</script>

<style scoped>
  .musicItem{
    min-height: 50px;
    background-color: rgba(255, 255, 255, 1);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .top div{
    width: 50%;
    float: right;
    margin-right: 10px;
    color: rgba(0,0,0,0.5);
  }
  .top img{
    vertical-align: middle;
    border-radius: 5px;
    width: 140px;
    height: 140px;
    margin-left: 15px;
  }
  .top{
    padding: 10px 0;
  }
  .gedan{
    padding-top: 45px;
    background-color: rgba(0,0,0,0.1);
  }
  .back{
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 635px;
  }
</style>
