<template>
  <div class="fm-page">
    <div class="song-info">
      <fm-player class="player-block"></fm-player>
      <div class="song-detail">
        <div class="song-title">勉为其难</div>
        <div class="song-meta">
          <div class="song-album">专辑: <a href="" class="stress">勉为其难</a></div>
          <div class="song-album">歌手: <a href="" class="stress">王冕</a></div>
        </div>
        <lyric-block class="lyric-block"></lyric-block>
      </div>
    </div>
  </div>
</template>

<script>
import fmPlayer from './player'
import lyricBlock from '@/components/Player/lyric.vue'

export default {
  components: {
    fmPlayer,
    lyricBlock
  }
}
</script>

<style lang="less" scoped>
  @import '../lib.less';
  .song-info {
    display: flex;
    .player-block {
      width: 440px;
    }
    .song-detail {
      
    }
  }
</style>

