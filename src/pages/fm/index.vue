<template>
  <div class="fm-page">
    <div class="song-info">
      <fm-player class="player-block"></fm-player>
      <div class="song-detail">
        <div class="song-title">勉为其难</div>
        <div class="song-meta">
          <div class="song-album">专辑： <a href="" class="stress">勉为其难</a></div>
          <div class="song-singer">歌手： <a href="" class="stress">王冕</a></div>
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

.fm-page {
  width: 760px;
  margin: 0 auto;
}

.song-info {
  display: flex;
  .player-block {
    flex: 1;
    padding-right: 20px;
  }
}

.song-detail {
  flex: 1;
  margin: 35px 0;
  padding-left: 20px;
  .song-title {
    font-size: 22px;
    color: #333;
    cursor: text;
  }
  .song-meta {
    overflow: hidden;
    margin-top: 16px;
    color: #646464;
    .song-album {
      float: left;
      width: 180px;
    }
    .song-singer {
      float: left;
    }
    .stress {
      color: #4b7bc3;
    }
  }
  .lyric-block {
    margin: 25px 50px 0 0;
  }
}
</style>

