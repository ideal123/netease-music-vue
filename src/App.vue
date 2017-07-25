<template>
  <div class="app" id="app">
    <header-bar></header-bar>
    <div class="container">
      <side-bar class="side-bar"></side-bar>
      <router-view class="page-view"></router-view>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import headerBar from './components/App/header-bar'
import sideBar from './components/App/side-bar'
import footerBar from './components/App/footer-bar'

export default {
  name: 'app',
  components: {
    headerBar,
    sideBar,
    footerBar
  }
}
</script>

<style lang="less">
@import './styles/lib.less';
body {
  font-size: 14px;
  font-family: 'Microsoft YaHei, Arial, Helvetica, sans-serif';
  color: #000;
  background-color: gray;
}
.app {
  width: 1022px;
  margin: 20px auto;
  background-color: #fafafa;
}
.container {
  position: relative;
  height: 570px;
  padding-left: 200px;
  .side-bar {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 200px;
    border-right: @border;
  }
  .page-view {
    height: 100%;
  }
}
</style>

