<template>
  <div class="me">
    <template v-for="(item, index) of items">
      <div :key="index">
        <p class="title"><b>{{item.title}}</b></p>
        <template v-for="(list, index1) of item.detail">
          <div :key="index1" class="content" @click="toTopList(list)">
            <img :src="list.src">
            <p style="margin-top: 33px">{{list.name}}</p>
            <p style="color: rgba(0,0,0,0.3)">{{list.tip}}</p>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Me',
  data () {
    return {
      items: [],
      url: 'http://129.204.34.155:8081/music/getTop'
    }
  },
  created () {
    this.$http.get(this.url).then(response => {
      this.items = response.data
    }, error => {
      console.log(error)
    })
  },
  activated () {
    this.$emit('topMessage', '榜单')
    this.$emit('isShowPlay', false)
  },
  methods: {
    toTopList (list) {
      this.$router.push({name: 'topList', params: {list: list}})
    }
  }
}
</script>

<style scoped>
  .content img{
    width: 120px;
    height: 120px;
    float: left;
    margin: 5px 0 0 10px;
  }
  .content p{
    height: 30px;
    line-height: 30px;
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .content{
    height: 125px;
    border: 1px solid rgba(255, 255, 255, 1);
  }
  .title{
    margin: 0;
    padding: 10px;
    font-size: 20px;
    color: rgba(0,0,0,0.8);
    border-bottom: 1px solid rgba(0,0,0,0.2);
  }
  .me{
    width: 100%;
  }
</style>
