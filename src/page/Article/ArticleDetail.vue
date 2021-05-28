<template>
  <Layout>
    <template #default>
      <div class="article_detail_container">
        <div class="blog">
          <!-- 标题 -->
          <h1 class="blog-title">
            {{ title }}
          </h1>

          <!-- 文章meta -->
          <div class="blog-meta">
            <Icon type="time" />
            {{ ctime }} |
            <Icon type="zan" />
            {{ like }}赞 |
            <Icon type="eye" />
            {{ views }}
          </div>
          <hr />
          <!-- 文章内容 -->
          <div v-html="content" class="blog-content markdown-body"></div>

          <!-- 版权声明 -->
          <div class="copy clearfix">
            <p>本站所有文章在CC BY-NC-SA 4.0 协议下授权 这意味着您可以自由地转载、修改</p>
            <p>但您<span>必须</span>遵守本站规定：</p>
            <p>转载时<span>必须</span>给出适当署名，并提供本站原文链接</p>
            <p>您<span>不得</span>将本站内容用于商业目的</p>
          </div>
          <div class="toolbox_list">
            <div class="tags">
              <Icon type="tag" />
              <span v-for="tag in tags" :key="tag">
                {{ tag }}
              </span>
            </div>
            <div class="like" :class="{ active: isLike }">
              <a @click="changeLike">喜欢一下吧</a>
              <Icon type="heart" />
            </div>
          </div>
        </div>

        <CommentArea :blogId="blogId" />
      </div>
    </template>
    <template #right>
      <SiteAside />
    </template>
  </Layout>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { findArticlById } from "../../service";
import SiteAside from "@/components/SiteAside/index.vue";
import Layout from "@/components/Layout/index.vue";
import Icon from "@/components/Icon/index.vue";
import CommentArea from "../../components/CommentArea/index.vue";
import "@/style/markdown.css";
import "highlight.js/styles/vs.css";
export default {
  components: {
    SiteAside,
    Layout,
    Icon,
    CommentArea,
  },
  setup() {
    document.title = "文章详情";

    const route = useRoute();
    const blogId = route.params.id;
    const titleRef = ref("");
    const ctimeRef = ref("");
    const likeRef = ref(0);
    const viewsRef = ref(0);
    const contentRef = ref("");
    const tagsRef = ref([]);

    (async () => {
      const result = await findArticlById(blogId);
      console.log(result);
      titleRef.value = result.data.title;
      ctimeRef.value = result.data.createdAt.slice(0, 10);
      likeRef.value = result.data.like;
      viewsRef.value = result.data.views;
      contentRef.value = result.data.content;
      tagsRef.value = result.data.tags.split(",");
    })();

    return {
      title: titleRef,
      ctime: ctimeRef,
      like: likeRef,
      views: viewsRef,
      content: contentRef,
      tags: tagsRef,
      blogId,
    };
  },
};
</script>

<style lang="scss" scoped>
.article_detail_container {
  width: 960px;
  color: #212529;
  font-size: 15px;
  background-color: #ffffff;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 4px 6px 8px rgba(7, 17, 27, 0.06);
  transition: 0.3s all;
  opacity: 0.8;
  margin: 0 auto 30px;

  .blog {
    .blog-title {
      font-size: 28px;
      color: #212529;
      font-weight: 700;
      margin-bottom: 20px;
      color: #1f2d3d;
    }

    .blog-meta {
      color: #858585;
      font-size: 14px;

      .iconfont {
        font-size: 13px;
      }
    }

    hr {
      margin: 20px 0;
    }

    .blog-content {
      color: #4c4948;

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 30px 0;

        &::before {
          opacity: 0.5;
          content: "##";
          margin-right: 0.3rem;
        }
      }

      blockquote {
        padding: 10px;
        border-radius: 5px;
        margin: 20px 0;
        background-color: #eeeeee;
      }

      p {
        margin: 20px 0;
      }

      img {
        height: auto;
        max-height: 50rem;
        margin: 0 auto;
        display: block;
        max-width: 100%;
        margin-left: auto;
        margin-right: auto;
      }

      a {
        color: #80c8f8;

        &:hover {
          text-decoration: underline;
          color: #49b1f5;
        }
      }
    }

    .copy {
      text-align: center;
      color: #b3b3b3;
      padding: 30px 0px 20px;
      margin-top: 20px;
      border-top: 1px dashed #dddddd;
      border-bottom: 1px dashed #dddddd;
      font-size: 14px;

      p {
        margin: 10px 0;

        span {
          font-weight: 700;
          color: #4c4948;
        }
      }
    }

    .toolbox_list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #b3b3b3;
      margin-top: 10px;
      .tags {
        text-align: left;

        i {
          margin-right: 5px;
        }

        span {
          margin: 0 3px;
          &:hover {
            color: #eea2a4;
          }
        }
      }

      .like {
        cursor: pointer;
        display: flex;
        align-items: center;
        &.active {
          color: #eea2a4;
        }

        &:hover {
          a {
            text-decoration: underline;
          }
        }

        i {
          font-size: 40px;
          vertical-align: sub;
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
