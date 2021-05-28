<template>
  <div class="editor_blog_container">
    <h2 class="blog_title">写博客</h2>
    <div class="home">
      <input
        type="text"
        class="inp title"
        v-model="title"
        id="blog-title"
        placeholder="请输入标题"
      />
      <input
        type="text"
        class="inp tags"
        v-model="tags"
        id="blog-tags"
        placeholder="请输入标签，以逗号分割"
      />
      <textarea
        name=""
        id=""
        cols="140"
        rows="15"
        placeholder="你是我一生只会遇见一次的惊喜..."
        v-model="content"
      ></textarea>
      <button class="submit" @click="sendBlog">提交</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { postBlog } from "../../../service";
import marked from "marked";
import hljs from "highlight.js";
export default {
  components: {},
  setup() {
    document.title = "写博客";

    const titleRef = ref("");
    const tagsRef = ref("");
    const contentRef = ref("");

    const sendBlog = async () => {
      if (titleRef.value && tagsRef.value && contentRef.value) {
        var rendererMD = new marked.Renderer();
        // 配置marked
        marked.setOptions({
          renderer: rendererMD,
          highlight: function(code) {
            return hljs.highlightAuto(code).value;
          },
          pedantic: false,
          gfm: true,
          tables: true,
          breaks: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
          xhtml: false,
        });

        const markContent = marked(contentRef.value);
        console.log(markContent);
        const result = await postBlog(titleRef.value, tagsRef.value, markContent);
        if (result.data) {
          alert("发表成功");
          titleRef.value = "";
          tagsRef.value = "";
          contentRef.value = "";
        }
      } else {
        alert("信息不完整");
      }
    };

    return {
      title: titleRef,
      tags: tagsRef,
      content: contentRef,
      sendBlog,
    };
  },
};
</script>

<style lang="scss" scoped>
.editor_blog_container {
  padding: 30px;
  height: 100%;
  box-sizing: border-box;

  .blog_title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: bold;
  }

  .home {
    position: relative;
    width: 100%;
    height: calc(100% - 52px);
    padding-right: 20px;
    overflow: auto;

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

    .inp {
      width: 180px;
      height: 40px;
      margin-bottom: 10px;
      margin-right: 30px;
      border: none;
      border-bottom: 1px dashed #ccc;
      outline: none;
      font-size: 16px;
      padding: 0 10px;
      color: #5a5a5a;
      background-color: transparent;
    }

    textarea {
      resize: vertical;
      color: #7b8a8b;
      border: 1px solid #eea2a4;
      border-radius: 5px;
      outline-color: #eea2a4;
      font-size: 14px;
      padding: 10px 20px;
      background-image: url("../../../assets/image/comment-bg.png");
      background-repeat: no-repeat;
      background-position: right bottom;
      background-size: 285px 200px;
      transition: all 0.5s;
      background-color: transparent;
      &:focus {
        background-position-y: 300px;
      }
    }

    .submit {
      border: 1px solid #eea2a4;
      background-color: #eea2a4;
      color: #ffffff;
      padding: 8px 30px;
      border-radius: 5px;
      transition: 0.3s all;
      margin: 20px auto 0px;
      display: block;

      &:hover {
        background-color: #ee7f82;
      }
    }
  }
}
</style>
