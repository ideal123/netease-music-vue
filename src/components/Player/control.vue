<template>
  <div class="audio-control">
    <div class="control-btns">
      <div class="control-btn control-pause" @click="toggle"><i class="iconfont" :class="playing ? 'icon-pause': 'icon-play'"></i></div>
      <div class="control-btn control-next"><i class="iconfont icon-next"></i></div>
    </div>
    <progress-bar class="progress-block" :totalTime="totalTime" :currentTime="currentTime"></progress-bar>
    <volume-bar class="volume-block"></volume-bar>
    <div class="lyric-control"><span class="lyric-btn">词</span></div>
    <audio src="/static/music.mp3" ref="player"></audio>
  </div>
</template>

<script>
import progressBar from './progress'
import volumeBar from './volume'
export default {
  data () {
    return {
      playing: false,
      totalTime: 0,
      currentTime: 0
    }
  },
  methods: {
    toggle () {
      this.playing ? this.pause() : this.play()
      this.playing = !this.playing
    },
    play () {
      this.$refs.player.play()
    },
    pause () {
      this.$refs.player.pause()
    }
  },
  mounted () {
    this.$refs.player.addEventListener('play', () => {
      this.totalTime = Math.floor(this.$refs.player.duration)
      setInterval(() => {
        this.currentTime = Math.floor(this.$refs.player.currentTime)
      }, 1000)
    })
  },
  components: {
    progressBar,
    volumeBar
  }
}
</script>


<style lang="less" scoped>
@import '../lib.less';
.audio-control {
  display: flex;
  height: 50px;
}
.control-btns {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  margin: 0 18px;
  .control-btn {
    margin: 0 12px;
    border-radius: 50%;
    text-align: center;
    color: white;
    background-color: @red;
    cursor: pointer;
    transition: .4s;
    &:hover {
      background-color: @base;
    }
  }
  .control-pause {
    width: 35px;
    height: 35px;
    line-height: 35px;
    .iconfont {
      font-size: 22px;
    }
  }
  .control-next {
    width: 30px;
    height: 30px;
    line-height: 30px;
    .iconfont {
      margin-left: 2px;
      font-size: 16px;
    }
  }
}
.progress-block {
  margin-left: 14px;
}
.volume-block {
  margin-left: 18px;
}
.lyric-control {
  width: 34px;
  margin-left: 20px;
  line-height: 50px;
  font-size: 10px;
  color: #666;
  .lyric-btn {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid #919192;
    line-height: 14px;
    text-align: center;
    cursor: pointer;
    &:hover {
      color: #444;
    }
  }
}
</style>
