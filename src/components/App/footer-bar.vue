<template>
  <div class="player-footer">
    <audio-control></audio-control>
  </div>
</template>

<script>
import audioControl from '@/components/Player/control'

export default {
  components: {
    audioControl
  }
}
</script>


<style lang="less" scoped>
@import '../lib.less';

.player-footer {
  height: 50px;
  border-top: @border;
  background-color: #f6f6f8;
}
</style>

<style lang="less">
@import '../lib.less';
.f-btn {
  position: absolute;
  top: -5px;
  right: -7px;
  width: 14px;
  height: 14px;
  border: 1px solid #ccc;
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
</style>

