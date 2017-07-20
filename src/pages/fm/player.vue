<template>
  <div class="fm-player">
    <div class="poster-wrapper">
      <img class="poster" src="../../assets/t.jpg" alt="poster">
      <div
        class="control-btn"
        :class="playing ? 'control-pause' : 'control-play'"
        @click="playing = !playing"
      >
        <i class="fa" :class="playing ? 'fa-pause' : 'fa-play'" aria-hidden="true"></i>
      </div>
    </div>
    <div class="control-wrapper">
      <div class="control-btn" title="喜欢"><i class="fa fa-heart-o" aria-hidden="true"></i></div>
      <div class="control-btn" title="垃圾桶"><i class="fa fa-trash-o" aria-hidden="true"></i></div>
      <div class="control-btn" title="下一首"><i class="fa fa-step-forward" aria-hidden="true"></i></div>
      <div class="control-btn" title="更多"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      playing: true
    }
  }
}
</script>

<style lang="less" scoped>
@import '../lib.less';
.fm-player {
  overflow: hidden;
}
.poster-wrapper {
  float: right;
  position: relative;
  width: 300px;
  height: 300px;
  margin-top: 70px;
  .poster {
    height: 100%;
    border: @border;
  }
  .control-btn {
    position: absolute;
    border: @border;
    border-radius: 50%;
    text-align: center;
    transition: .4s;
    cursor: pointer;
    &:hover {
      border-color: #fff;
      background-color: rgba(0,0,0,.4);
    }
  }
  .control-pause {
    right: 0;
    bottom: 0;
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin: 6px;
    background-color: #999;
  }
  .control-play {
    right: 50%;
    bottom: 50%;
    width: 56px;
    height: 56px;
    line-height: 56px;
    margin-right: -28px;
    margin-bottom: -28px;
    background-color: rgba(0,0,0,.3);
  }
}
.control-wrapper {
  float: right;
  display: flex;
  justify-content: space-between;
  width: 300px;
  padding: 30px 8px;
  .control-btn {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: @border;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background-color: #f5f5f7;
    }
    .fa {
      font-size: 20px;
    }
  }
}
</style>

