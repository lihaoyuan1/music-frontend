<template>
  <div class="recommend">
    <div style="padding: 10px;">
      <span><b>分类</b></span><span style="color: rgba(0,0,0,0.5)">&nbsp;>&nbsp;</span>
      <span style="color: rgba(0,0,0,0.6)">{{category}}</span>
      <span style="float: right;color: rgba(0,0,0,0.6)" @click="more">更多>></span>
    </div>
    <div class="gedan_list">
      <template v-for="(item, index) of items">
        <gedan :item="item" :key="index"></gedan>
      </template>
    </div>
    <div v-if="showMore" style="text-align: center; color: rgba(0,0,0,0.3);
        padding: 10px 0" @click="getMore">点击加载更多</div>
    <div v-if="loading" style="text-align: center;padding-top: 10px">
      <span style="color: rgba(0,0,0,0.3)">加载中</span>
      <img src="https://s2.music.126.net/style/web2/img/loading.gif?c0b538c08f72519dcbb39afae3f7660e"
           style="vertical-align: middle">
    </div>
  </div>
</template>

<script>
import gedan from '../components/gedan'
export default {
  name: 'Recommend',
  components: {gedan},
  data () {
    return {
      url: 'http://129.204.34.155:8081/music/',
      items: [],
      category: '全部风格',
      showMore: false,
      offset: 0,
      loading: false
    }
  },
  created () {
    this.$http.get(this.url + '/home').then(response => {
      this.items = response.data
      this.showMore = true
    }, error => {
      console.log(error)
    })
  },
  activated () {
    this.$emit('isShowPlay', false)
    this.$emit('topMessage', '歌单')
    if (this.$route.params.cat !== undefined) {
      if (this.$route.params.cat !== this.category) {
        this.category = this.$route.params.cat
        this.$http.get(this.url + 'cat', {params: {cat: this.category}}, {emulateJSON: true}).then(response => {
          this.items = response.data
        }, error => {
          console.log(error)
        })
      }
    }
  },
  methods: {
    more () {
      this.$router.push({name: 'Category'})
    },
    getMore () {
      this.showMore = false
      this.loading = true
      this.offset += 35
      this.$http.get(this.url + 'nextPage', {params: {cat: this.category, offset: this.offset}},
        {emulateJSON: true}).then(response => {
        this.loading = false
        for (let i = 0; i < 34; i++) {
          this.items.push(response.data[i])
        }
        this.showMore = true
      }, error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
  .gedan_list{
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 10px;
  }
  .recommend{
    width: 100%;
    background-color: aliceblue;
  }
</style>
