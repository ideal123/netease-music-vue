<template>
  <div class="page-find">
    <div class="find-menu">
      <ul class="menu-list">
        <li><router-link to="/find/recommend">个性推荐</router-link></li>
        <li><router-link to="/find/songlist">歌单</router-link></li>
        <li><router-link to="/find/radio">主播电台</router-link></li>
        <li><router-link to="/find/ranking">排行榜</router-link></li>
        <li><router-link to="/find/singer">歌手</router-link></li>
        <li><router-link to="/find/newest">最新音乐</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="less" scoped>
@import '../lib.less';

.find-menu {
  height: 42px;
  border-bottom: @border;
}

.menu-list {
  text-align: center;
  li {
    display: inline-block;
    margin: 0 20px;
    font-size: 14px;
  }
  a {
    display: inline-block;
    width: 4em;
    height: 42px;
    line-height: 42px;
  }
  .router-link-active {
    color: @base;
    border-bottom: 2px solid @base;
  }
}
</style>

