<template>
  <div class="side-bar">
    <div class="entry-block">
      <div class="entry-block-title">推荐</div>
      <ul class="entry-list">
        <li><router-link to="/find"><i class="iconfont icon-music"></i><span>发现音乐</span></router-link></li>
        <li><router-link to="/fm"><i class="iconfont icon-fm"></i><span>私人FM</span></router-link></li>
        <li><router-link to="/mv"><i class="iconfont icon-mv"></i><span>MV</span></router-link></li>
        <li><router-link to="/friends"><i class="iconfont icon-friends"></i><span>朋友</span></router-link></li>
      </ul>
    </div>
    <div class="entry-block">
      <div class="entry-block-title">我的音乐</div>
      <ul class="entry-list">
        <li><router-link to="/local"><i class="iconfont icon-local"></i><span>本地音乐</span></router-link></li>
        <li><router-link to="/download"><i class="iconfont icon-download"></i><span>下载管理</span></router-link></li>
      </ul>
    </div>
    <div class="entry-block">
      <div class="entry-block-title">创建的歌单</div>
      <ul class="entry-list">
        <li><router-link to="/loves"><i class="iconfont icon-heart"></i><span>我喜欢的音乐</span></router-link></li>
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
  a {
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
  .router-link-active {
    border-color: @base;
    color:  #000;
    background-color: #e6e7ea;
  }
  .iconfont {
    margin-right: 10px;
  }
}
</style>

