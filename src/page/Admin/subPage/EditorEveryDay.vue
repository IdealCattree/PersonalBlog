<template>
  <div class="editor_everyday_container">
    <h2 class="blog_title">每日格言</h2>
    <div class="home">
      <input
        type="text"
        class="inp title"
        v-model="motto"
        id="blog-title"
        placeholder="请输入今日的格言"
      />

      <button class="submit" @click="sendMotto">提交</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { postMotto } from "../../../service";
export default {
  components: {},
  setup() {
    document.title = "写格言";

    const mottoRef = ref("");

    const sendMotto = async () => {
      if (mottoRef.value) {
        const result = await postMotto(mottoRef.value);
        console.log(result);
        if (result.data) {
          alert("发表成功");
          mottoRef.value = "";
        }
      } else {
        alert("信息不完整");
      }
    };

    return {
      motto: mottoRef,
      sendMotto,
    };
  },
};
</script>

<style lang="scss" scoped>
.editor_everyday_container {
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

    .inp {
      width: 280px;
      height: 40px;
      margin: 0 auto 30px;
      display: block;
      border: none;
      text-align: center;
      border-bottom: 1px dashed #ccc;
      outline: none;
      font-size: 16px;
      padding: 0 10px;
      color: #5a5a5a;
      background-color: transparent;
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
