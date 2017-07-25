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
