<template>
  <div class="bloglist_container">
    <h2 class="title">博客列表</h2>
    <ul class="blog-list">
      <li class="blog-item" v-for="blog in blogList" :key="blog.id">
        <div class="blog_title">{{ blog.title }}</div>
        <button @click="deleteBlog(blog.id)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import { findArticlAll, deleteBlogById } from "../../../service";
export default {
  setup() {
    document.title = "文章列表";

    const blogListRef = ref([]);
    const getData = async () => {
      const result = await findArticlAll();
      blogListRef.value = result.data.data;
    };
    getData();

    const deleteBlog = async blogId => {
      const result = await deleteBlogById(blogId);
      if (result.data === 1) {
        alert("删除成功");
        await getData();
      } else {
        alert("删除失败");
      }
    };

    return {
      blogList: blogListRef,
      deleteBlog,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../style/var.scss";
.bloglist_container {
  padding: 30px;
  height: 100%;
  box-sizing: border-box;

  .title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
  }

  .blog-list {
    overflow: auto;
    width: 100%;
    height: calc(100% - 52px);
    &::-webkit-scrollbar {
      background-color: #ffffff;
      width: 3px;
      height: 3px;
      border-radius: 20px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #80c8f8;
      border-radius: 20px;
    }

    .blog-item {
      margin-bottom: 10px;
      padding: 10px 50px 10px 20px;
      border-radius: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .blog_title {
        font-size: 24px;
        font-weight: bold;
        transition: all 0.3s;
        color: #5a5a5a;
      }

      &:hover {
        .blog_title {
          transform: translateX(30px);
          color: #80c8f8;
        }
      }

      button {
        border: 1px solid #80c8f8;
        outline-color: #80c8f8;
        padding: 5px 16px;
        color: #80c8f8;
        border-radius: 6px;
        transition: all 0.3s;

        &:hover {
          background-color: #80c8f8;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
