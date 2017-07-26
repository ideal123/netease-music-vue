<template>
  <div class="progress-wrapper">
    <div class="current-time">{{currentTime | fmtTime}}</div>
    <div class="progress-bar">
      <div class="progress-cur" :style="{ width: progress }">
        <span class="f-btn"><i></i></span>
      </div>
    </div>
    <div class="total-time">{{totalTime | fmtTime}}</div>
  </div>
</template>

<script>
export default {
  props: ['totalTime', 'currentTime'],
  computed: {
    progress () {
      return this.currentTime / this.totalTime * 100 + '%'
    }
  },
  filters: {
    fmtTime (val) {
      var min = Math.floor(val / 60)
      var s = val % 60
      return (min < 10 ? '0' : '') + min + ':' + (s < 10 ? '0' : '') + s
    }
  }
}
</script>

<style lang="less" scoped>
@import '../lib.less';
.progress-wrapper {
  display: flex;
  align-items: center;
  flex: 1;
  .current-time,
  .total-time {
    // font-size: 12px;
    color: #696969;
  }
  .progress-bar {
    display: flex;
    align-items: center;
    flex: 1;
    margin: 0 10px;
  }
}
.progress-bar {
  display: flex;
  flex: 1;
  height: 4px;
  border-radius: 2px;
  background-color: #e6e6e8;
  .progress-cur {
    position: relative;
    height: 100%;
    background-color: @red;
  }
}
</style>
