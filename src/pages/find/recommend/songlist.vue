<template>
  <div class="recommend-song-list">
    <h3 class="list-title">推荐歌单</h3>
    <div class="song-list">
      <router-link class="song-list-item item-today" to="/">
        <div class="song-cover-wrap">
          <div class="weekday">星期{{ weekday }}</div>
          <div class="monthday">{{ monthday }}</div>
        </div>
        <div class="song-intro">每日歌曲推荐</div>
      </router-link>
      <router-link class="song-list-item" to="/" v-for="n in 9" :key="n">
        <div class="song-cover-wrap">
          <img src="/static/cover.jpg" alt="cover" class="song-cover">
        </div>
        <div class="song-intro">当古典音乐遇上另类演绎，妙趣横生</div>
      </router-link>
    </div>
  </div>
</template>

<script>
const weekday = '日一二三四五六'

export default {
  data () {
    const day = new Date()
    return {
      weekday: weekday[day.getDay()],
      monthday: day.getDate()
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../lib.less';

.list-title {
  line-height: 2;
  border-bottom: @border;
  font-weight: normal;
  font-size: 18px;
  font-family: 'Microsoft YaHei';
}

.item-today {
  text-align: center;
  cursor: pointer;
  .weekday {
    margin-top: 16px;
    font-family: 'Microsoft YaHei';
    font-size: 14px;
    color: #5c5c5c;
    cursor: pointer;
  }
  .monthday {
    color: @base;
    font-size: 80px;
    font-family: Arial, sans-serif;
    cursor: pointer;
  }
}

.song-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &-item {
    display: block;
    width: 140px;
    height: 184px;
    margin-bottom: 30px;
  }
  .song-cover-wrap {
    overflow: hidden;
    height: 140px;
    border: @border;
    background-color: white;
    cursor: pointer;
  }
  .song-cover {
    width: 100%;
  }
  .song-intro {
    margin-top: 5px;
    line-height: 1.5;
    cursor: pointer;
  }
}
</style>
