<template>
  <div class="audio-control">
    <div class="control-btns">
      <div class="control-btn control-pause"><i class="iconfont icon-pause"></i></div>
      <div class="control-btn control-next"><i class="iconfont icon-next"></i></div>
    </div>
    <progress-bar class="progress-block"></progress-bar>
    <volume-bar class="volume-block"></volume-bar>
  </div>
</template>

<script>
import progressBar from './progress'
import volumeBar from './volume'
export default {
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
    font-size: 16px;
  }
  .control-next {
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 10px;
  }
}
.progress-block {
  margin-left: 14px;
}
.volume-block {
  margin-left: 18px;
}
</style>
