<template>
  <div class="footer_container">
    <dl class="drive">
      <i></i>
      <dt>🚀强力驱动</dt>
      <dd><a href="https://cn.vuejs.org/">Vue</a></dd>
      <dd><a href="https://nodejs.org/en/">NodeJs</a></dd>
      <dd><a href="https://pages.github.com">GitHub</a></dd>
    </dl>
    <dl class="theme">
      <i></i>
      <dt>🎨制作主题</dt>
      <dd>
        <a href="https://element.eleme.cn/#/zh-CN">Element-UI</a>
      </dd>
      <dd>
        <a href="https://animate.style">Animate.css</a>
      </dd>
      <dd>
        <a href="https://www.sass.hk">SASS</a>
      </dd>
    </dl>
    <p>
      &copy; &nbsp;2020&nbsp;|&nbsp;由kris本人用&nbsp;<i class="iconfont icon-xin"></i>&nbsp;制作
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer_container {
  width: 100%;
  margin-bottom: 30px;
  font-size: 14px;
  .drive,
  .theme {
    display: flex;
    justify-content: center;
    color: #eeeeee;
    margin: 10px 0;

    dt {
      margin-right: 15px;
    }

    dd a {
      color: #80c8f8;
      margin-right: 10px;
    }
  }

  p {
    color: #eeeeee;
    text-align: center;
  }
}
</style>
