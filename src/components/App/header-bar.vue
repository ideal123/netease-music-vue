<template>
  <div class="player-header">
    <div class="logo"></div>
  </div>
</template>

<style lang="less" scoped>
@import '../lib.less';
.player-header {
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 15px;
  background-color: @base;
  .logo {
    width: 116px;
    height: 24px;
    background-image: url('../../assets/logo.jpg');
  }
}
</style>
