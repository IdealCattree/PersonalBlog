<template>
  <div class="resume_container">
    <h2 class="title">刘浩男</h2>
    <div class="aside">
      <span>男</span>| <span>20岁</span>| <span>base北京</span>| <span>13933616583</span>|
      <span>cjhaonan@163.com</span>
    </div>
    <div class="item">
      <h3 class="item_title">教育背景</h3>
      <div class="item_desc">
        <span>2018.09-至今</span>
        <span>河北东方学院</span>
        <span>软件工程</span>
      </div>
    </div>
    <div class="item">
      <h3 class="item_title">专业技能</h3>
      <div class="skill">
        <ul>
          <li>熟练掌握HTML5、CSS3、ES6+</li>
          <li>熟练掌握JavaScript（闭包、原型链、预编译、作用域链）</li>
          <li>熟悉ES6的新特性（PromiseA+规范、迭代器、生成器、代理和反射）</li>
          <li>具有一定的网络基础，熟悉HTTP协议，了解TCP/UDP</li>
          <li>熟悉前端模块化（CommonJS、ES6模块化等）以及包管理器（npm、yarn等）</li>
          <li>熟悉前端构建工具webpack的配置，对打包流程有一定了解，使用过vite/gulp</li>
          <li>了解Babel在webpack中的配置与使用</li>
          <li>熟悉tree-shaking、代码压缩、懒加载等，对性能优化有一定理解</li>
          <li>熟练使用TypeScript编程，编写高质量可维护的代码</li>
          <li>熟悉Vue全家桶，了解Vue3的新特性；熟悉React全家桶以及Redux异步处理的中间件</li>
          <li>熟悉后端语言Nodejs（核心模块），可以熟练的使用Express、Koa框架开发接口</li>
          <li>熟悉MySQL、Mongodb数据库，并熟练使用Mongoose与Sequelize ORM框架</li>
        </ul>
      </div>
    </div>
    <div class="item">
      <h3 class="item_title">项目经验</h3>
      <div class="item_desc"></div>
    </div>

    <div class="item">
      <h3 class="item_title">自我评价</h3>
      <div class="item_desc"></div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    document.title = "简历";
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/var.scss";
.resume_container {
  width: 960px;
  background-color: $bg;
  margin: 0 auto;
  border-radius: 10px;
  padding: 20px;
  user-select: none;
  .title {
    font-size: 24px;
    letter-spacing: 3px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }

  .aside {
    text-align: center;
    color: $lightWord;

    span {
      margin: 0 10px;
    }
  }

  .item {
    margin-top: 30px;
    padding: 0 20px;

    .item_title {
      font-size: 18px;
      font-weight: bold;
      color: $word;
    }
    .item_desc {
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      font-size: 16px;
      color: $lightWord;
      margin-top: 15px;
    }
    .skill {
      color: $lightWord;
      margin-top: 10px;
      li {
        list-style-type: disc;
        margin-left: 25px;
        margin-bottom: 5px;
        font-size: 14px;
      }
    }
  }
}
</style>
