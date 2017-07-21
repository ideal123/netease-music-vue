<template>
  <div class="side-bar">
    <div class="entry-block">
      <div class="entry-block-title">推荐</div>
      <ul class="entry-list">
        <li><router-link to="/" class="entry-item" :class="{ active: $route.path == '/' }"><i class="iconfont icon-music"></i><span>发现音乐</span></router-link></li>
        <li><router-link to="/fm" class="entry-item" :class="{ active: $route.path == '/fm' }"><i class="iconfont icon-fm"></i></i><span>私人FM</span></router-link></li>
        <li><router-link to="/mv" class="entry-item" :class="{ active: $route.path == '/mv' }"><i class="iconfont icon-mv"></i><span>MV</span></router-link></li>
        <li><router-link to="/friends" class="entry-item" :class="{ active: $route.path == '/friends' }"><i class="iconfont icon-friends"></i><span>朋友</span></router-link></li>
      </ul>
    </div>
    <div class="entry-block">
      <div class="entry-block-title">我的音乐</div>
      <ul class="entry-list">
        <li><router-link to="/local" class="entry-item" :class="{ active: $route.path == '/local' }"><i class="iconfont icon-local"></i>本地音乐</span></router-link></li>
        <li><router-link to="/download" class="entry-item" :class="{ active: $route.path == '/download' }"><i class="iconfont icon-download"></i><span>下载管理</span></router-link></li>
      </ul>
    </div>
    <div class="entry-block">
      <div class="entry-block-title">创建的歌单</div>
      <ul class="entry-list">
        <li><router-link to="/loves" class="entry-item" :class="{ active: $route.path == '/loves' }"><i class="iconfont icon-heart"></i><span>我喜欢的音乐</span></router-link></li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../lib.less';
.side-bar {
  background-color: #f5f5f7;
}
.entry-block {
  color: #5c5c5c;
  .entry-block-title {
    height: 32px;
    line-height: 32px;
    text-indent: 10px;
  }
}
.entry-list {
  .entry-item {
    display: block;
    height: 32px;
    line-height: 32px;
    padding-left: 15px;
    border-left: 3px solid transparent;
    cursor: pointer;
    &:hover {
      color: #000;
    }
  }
  .active {
    border-color: @base;
    color:  #000;
    background-color: #e6e7ea;
  }
  .iconfont {
    margin-right: 10px;
    // font-size: 16px;
  }
}
</style>

