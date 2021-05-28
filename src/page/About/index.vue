<template>
  <div class="about_container">
    <div class="about">
      <div class="about-me">
        <h2>关于我</h2>
        <div class="tag">
          <span>编程</span>
          <span>吉他</span>
          <span>摄影</span>
          <span>理科生</span>
          <span>披萨</span>
        </div>
        <div class="me-content">
          <p>我是刘浩男</p>
          <p>00后、编程、摄影爱好者 喜欢白日做梦</p>
          <p>热爱钻研与计算机有关的一切</p>
          <p>Photoshop 影视剪辑 编程 Web前端 Java</p>
          <p>哪里可以找到我</p>
          <p>github b站 掘金 CSDN</p>
          <p>人生梦想</p>
          <p>带上相机，和喜欢的人一起环游世界</p>
        </div>
      </div>
      <div class="about-blog">
        <h2>关于博客</h2>
        <div class="blog-content">
          <p>在这里分享一些前端笔记，生活趣事，便于查阅和分享</p>
          <p>本站所有文章在CC BY-NC-SA 4.0 协议下授权 这意味着您可以自由地转载、修改。</p>
          <p>但您<span>必须</span>遵守本站规定：</p>
          <p>转载时<span>必须</span>给出适当署名，并提供本站原文链接</p>
          <p>您<span>不得</span>将本站内容用于商业目的</p>
        </div>
      </div>
    </div>

    <CommentArea blogId="-1" />
  </div>
</template>

<script>
import CommentArea from "../../components/CommentArea/index.vue";
export default {
  components: {
    CommentArea,
  },

  setup() {
    document.title = "关于我";
  },
};
</script>

<style lang="scss">
@import "../../style/var.scss";
.about_container {
  background-color: #ffffff;
  border-radius: 5px;
  padding: 25px 30px;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px 6px rgba(7, 17, 27, 0.06);
  color: #5a5a5a;
  font-size: 14px;
  transition: all 0.5s;
  width: 960px;
  margin: 0 auto;
  opacity: 0.9;

  &:hover {
    box-shadow: 0 4px 12px 12px rgba(7, 17, 27, 0.15);
  }

  /* 关于我   关于博客 */
  .about {
    text-align: center;

    h2 {
      font-size: 26px;
      font-weight: 700;
      color: $dark;
      margin-bottom: 30px;
    }

    .about-me {
      margin-bottom: 50px;
      border-bottom: 1px solid #eeeeee;

      .tag span {
        display: inline-block;
        padding: 10px;
        background-color: rgba(0, 0, 0, 0.06);
        margin: 0 5px;
        color: $word;
        font-size: 14px;
        margin-bottom: 10px;
      }

      .me-content p {
        margin: 14px 0;
      }
    }

    .about-blog {
      .blog-content {
        p {
          margin: 20px 0;

          span {
            font-weight: 700;
            color: $dark;
          }
        }
      }
    }
  }
}
</style>
