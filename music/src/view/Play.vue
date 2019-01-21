<template>
  <div class="play">
    <div class="play-top">
      <back ref="setMsg"></back>
    </div>
    <div class="play-content" v-if="!showLyric">
      <p style="font-size: 18px">{{ music.musicName }}</p>
      <p style="color: rgba(0, 0, 0, 0.5);">{{ music.singerName }}</p>
      <img :src="music.pictureUrl"><br/>
      <div  class="switch">
        <button @click="Change">
          <svg class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1641" width="32" height="32">
            <path d="M1.019092 373.455163l166.925033 0 0 579.599634 153.01411-153.01411 18.54689 13.909916L172.580092 980.875636c-9.273949 6.152424-18.54689 16.959947-27.820839 32.457813l-18.54689-9.273949c15.426373-21.668415 21.596922-34.044756 18.54689-37.094787L144.759254 396.640034 1.019092 396.640034 1.019092 373.455163zM65.933711 30.332156l18.54689-13.909916 171.561 194.745872-18.54689 13.909916L65.933711 30.332156zM334.868151 280.719705l533.222842 0 0 23.183865L334.868151 303.903569 334.868151 280.719705zM376.599913 62.789969l630.595275 0 0 825.350209c6.152424 95.78549-43.318704 140.619644-148.377136 134.46722-15.497866 0-43.318704-1.586943-83.453454-4.636974-27.820839 0-46.367729 0-55.641678 0l4.636974-23.183865c9.273949 0 26.233896 0 51.004703 0 37.085725 3.050032 64.906564 4.636974 83.453454 4.636974 89.614941 6.152424 131.345695-30.941356 125.193271-111.283355L984.011323 85.973833 376.599913 85.973833 376.599913 62.789969zM404.420751 484.738518l389.481674 0L793.902425 823.224551 404.420751 823.224551 404.420751 484.738518zM770.727623 507.922383 427.604616 507.922383l0 292.118304 343.123007 0L770.727623 507.922383z" p-id="1642"></path>
          </svg>
        </button>
      </div>
    </div>
    <div v-else class="lyric">
      <template v-for="(p, index) of lyric">
        <p :key="index">{{ p }}</p>
      </template>
      <div  class="switch">
        <button @click="Change">
          <svg class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2649" width="32" height="32">
            <path d="M956.67712 843.67872c-2.69312 50.048-68.03456 38.34368-102.16448 38.34368H127.86688c-13.4912 0-26.38848 1.21344-38.8352-5.23264-20.09088-10.41408-18.99008-31.89248-18.99008-50.77504v-68.4032V292.8128 180.48512c0-49.51552 67.21024-38.39488 99.28704-38.39488h663.45984c30.8736 0 68.70016-5.96992 98.94912 2.34496 38.00064 10.44992 24.9344 90.77248 24.9344 118.53312v226.16576l0.00512 354.54464c0 33.01376 51.2 33.01376 51.2 0V499.32288 270.09536c0-37.52448 7.49056-86.95296-6.6048-122.88-22.44608-57.21088-77.39904-56.32512-127.80032-56.32512H109.07136c-50.88256 0-87.5776 40.45312-90.21952 89.54368-0.53248 9.9072 0 19.9936 0 29.91104v613.8368c0 18.16064-0.23552 35.2768 6.6048 52.71552 13.97248 35.61984 48.81408 56.33024 86.3232 56.33024h794.75712c54.46656 0 98.24256-32.0256 101.34528-89.54368 1.77152-33.01376-49.43872-32.83968-51.20512-0.00512z" p-id="2650"></path>
            <path d="M664.8576 335.2576c-1.4848 45.8752-36.16256 80.54784-82.03264 82.03264-45.85984 1.4848-80.62464-38.38976-82.03264-82.03264-1.4848-45.86496 38.38976-80.62464 82.03264-82.03264 45.85984-1.4848 80.62464 38.38976 82.03264 82.03264 1.06496 32.93184 52.27008 33.03424 51.2 0-2.40128-74.2144-59.02336-130.83648-133.23264-133.23264-74.17344-2.40128-130.94912 62.63296-133.23264 133.23264-2.40128 74.17344 62.63296 130.94912 133.23264 133.23264 74.17344 2.40128 130.94912-62.63296 133.23264-133.23264 1.07008-33.03424-50.13504-32.92672-51.2 0zM62.55616 700.80512l229.46304-186.02496h-36.20352l445.44512 389.93408c24.7296 21.65248 61.09184-14.4128 36.1984-36.1984l-445.44-389.9392c-11.34592-9.9328-24.79616-9.24672-36.20352 0L26.35264 664.60672c-25.66144 20.79744 10.79808 56.79104 36.20352 36.1984z" p-id="2651"></path>
            <path d="M600.92416 751.11424l164.69504-185.1392h-36.1984c78.24384 75.37152 156.4928 150.7328 234.74688 226.0992 23.77728 22.90176 60.02176-13.2608 36.1984-36.1984-78.24384-75.37152-156.4928-150.7328-234.74688-226.0992-9.59488-9.24672-26.79808-10.5728-36.1984 0a2831453.4144 2831453.4144 0 0 0-164.69504 185.1392c-21.86752 24.576 14.21312 60.91776 36.1984 36.1984z" p-id="2652"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import back from '../components/back'
export default {
  name: 'play',
  components: {back},
  data () {
    return {
      music: [],
      showLyric: false,
      lyric: [],
      lyricId: '',
      url: 'http://129.204.34.155:8081/music/lyric'
    }
  },
  methods: {
    Change () {
      this.showLyric = !this.showLyric
    }
  },
  activated () {
    if (this.$route.params.music !== undefined) {
      this.$refs.setMsg.setMsg('播放')
      this.music = this.$route.params.music
      this.$emit('isShowPlay', true)
      this.$emit('setUrl', 'http://music.163.com/song/media/outer/url?id=' + this.music.musicId)
      this.$store.state.flag = true
      if (this.lyricId !== this.music.musicId) {
        this.lyricId = this.music.musicId
        this.$http.post(this.url, {id: this.lyricId}, {emulateJSON: true}).then(response => {
          this.lyric = response.data
        }, error => {
          console.log(error)
        })
      }
    } else {
      if (this.$route.params.flag === undefined) {
        this.$router.go(-1)
      } else {
        this.$emit('isShowPlay', true)
      }
    }
  }
}
</script>

<style scoped>
  .switch{
    position: fixed;
    width: 100%;
    max-width: 635px;
    bottom: 80px;
  }
  .play-content button,.lyric button{
    border: none;
    background: none;
    outline: none;
    float: right;
    margin-right: 30px;
  }
  .play-content svg,.lyric svg {
    fill: rgba(0, 0, 0, 0.5);
  }
  .play-content img{
    margin-top: 20px;
    width: 240px;
    height: 240px;
    border: 10px solid rgba(0,0,0,0.1);
    border-radius: 130px;
    animation: roll 15s;
    animation-delay: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  @keyframes roll {
    0%{transform: rotate(0deg)}
    25%{transform: rotate(90deg)}
    50%{transform: rotate(180deg)}
    75%{transform: rotate(270deg)}
    100%{transform: rotate(360deg)}
  }
  .play-content p{
    margin-top: 10px;
  }
  .lyric{
    text-align: center;
    padding: 100px 0;
  }
  .play-content{
    padding: 60px 0 0 0;
    text-align: center;
  }
  .play-top{
    position: fixed;
    width: 100%;
    max-width: 635px;
    top: 0;
  }
  .play{
    width: 100%;
  }
</style>
