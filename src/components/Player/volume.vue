<template>
  <div class="volume">
    <div class="volume-icon"><i class="iconfont icon-volume"></i></div>
    <div class="volume-bar">
      <div class="volume-cur" style="width: 50%;">
        <span class="f-btn"><i></i></span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../lib.less';

.volume {
  display: flex;
  align-items: center;
  .volume-icon {
    margin: 2px 2px 0 0;
    color: #666;
    &:hover {
      color: #444;
    }
  }
}

.volume-bar {
  width: 100px;
  height: 4px;
  border-radius: 2px;
  background-color: #e6e6e8;
  .volume-cur {
    position: relative;
    height: 100%;
    border-radius: 2px;
    background-color: @red;
    .f-btn {
      display: none;
    }
    &:hover .f-btn {
      display: inline;
    }
  }
}
</style>
