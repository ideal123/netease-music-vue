<template>
  <div class="progress-wrapper">
    <div class="current-time">02:12</div>
    <div class="progress-bar">
      <div class="progress-cur" style="width: 20%;">
        <span class="f-btn"><i></i></span>
      </div>
    </div>
    <div class="total-time">04:12</div>
  </div>
</template>

<style lang="less" scoped>
@import '../lib.less';
.progress-wrapper {
  display: flex;
  align-items: center;
  flex: 1;
  .current-time,
  .total-time {
    color: #333;
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
  .f-btn {
    position: absolute;
    top: -5px;
    right: -7px;
    width: 14px;
    height: 14px;
    border: @border;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 5px 2px #ccc;
    }
    i {
      position: absolute;
      top: 4px;
      left: 4px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: @red;
    }
  }
}
</style>
