<template>
  <div class="lyric-wrapper">
    <ul class="lyric-list">
      <template v-for="n in 6">
        <li class="lyric-item">感受停在我发端的指尖</li>
        <li class="lyric-item">如何瞬间 冻结时间</li>
        <li class="lyric-item">记住望着我坚定的双眼</li>
        <li class="lyric-item">也许已经 没有明天</li>
        <li class="lyric-item">面对浩瀚的星海</li>
        <li class="lyric-item">我们微小得像尘埃</li>
        <li class="lyric-item">漂浮在 一片无奈</li>
        <li class="lyric-item">缘份让我们相遇乱世以外</li>
        <li class="lyric-item">如何瞬间 冻结时间</li>
        <li class="lyric-item">记住望着我坚定的双眼</li>
        <li class="lyric-item">也许已经 没有明天</li>
        <li class="lyric-item">面对浩瀚的星海</li>
        <li class="lyric-item">我们微小得像尘埃</li>
        <li class="lyric-item">漂浮在 一片无奈</li>
      </template>
    </ul>
  </div>
</template>

<style lang="less" scoped>
@import '../lib.less';
.lyric-wrapper {
  height: 300px;
  border-right: @border;
}
.lyric-list {
  height: 100%;
  overflow-y: scroll;
  font-family: 'Arial';
  font-size: 14px;
  color: #888;
  .lyric-item {
    line-height: 2.5;
    cursor: text;
  }
}
</style>

