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

<style lang="less" scoped>
@import './styles/lib.less';

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
    overflow-y: auto;
    height: 100%;
    margin: 0 30px;
  }
}
</style>

