<template>
  <div class="comment_form_container">
    <input
      class="inp-user-info"
      v-model="username"
      type="text"
      name="name"
      placeholder="昵称(必填)"
    />
    <input
      class="inp-user-info"
      v-model="useremail"
      type="text"
      name="email"
      placeholder="电子邮箱(必填)"
    />
    <input
      class="inp-user-info"
      v-model="userwebsite"
      type="text"
      name="website"
      placeholder="网址 http://"
    />

    <textarea
      v-model="usercomment"
      placeholder="你是我一生只会遇见一次的惊喜..."
      name="comment"
      id="comment"
      rows="8"
      cols="85"
      class="comment"
    ></textarea>

    <button @click="sendComment" class="btn">发表评论 biu biu~~</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { postComment } from "../../../service";
export default {
  props: {
    blogId: {
      tyep: String,
      reduired: true,
    },
    parentId: {
      type: String,
      required: true,
    },
    parentName: {
      type: String,
    },
  },

  setup(props, ctx) {
    console.log(props.parentName);
    const usernameRef = ref(""); // 用户姓名
    const useremailRef = ref(""); // 用户邮箱
    const userwebsiteRef = ref(""); // 用户网站
    const usercommentRef = ref(""); // 用户评论
    const sendComment = async () => {
      if (!usernameRef.value || !useremailRef.value || !usercommentRef.value) {
        alert("信息不完全");
        return;
      }
      if (
        usernameRef.value === "kris" ||
        usernameRef.value === "Kris" ||
        usernameRef.value === "刘浩男"
      ) {
        alert("该名称已被使用，请更换");
        return;
      }
      console.log(props.parentId, props.parentName);
      // 发送评论
      const result = await postComment(
        props.parentId,
        props.blogId,
        usernameRef.value,
        useremailRef.value,
        usercommentRef.value,
        userwebsiteRef.value,
        props.parentName
      );
      console.log(result);
      if (result.code === 200) {
        alert("评论成功");
        usernameRef.value = "";
        useremailRef.value = "";
        userwebsiteRef.value = "";
        usercommentRef.value = "";

        // 评论成功后抛出重新请求评论的事件
        ctx.emit("request");
      }
    };

    return {
      username: usernameRef,
      useremail: useremailRef,
      userwebsite: userwebsiteRef,
      usercomment: usercommentRef,
      sendComment,
    };
  },
};
</script>

<style lang="scss" scoped>
.comment_form_container {
  margin-bottom: 50px;
  text-align: center;

  &.left {
    float: left;
  }

  .inp-user-info {
    width: 190px;
    height: 30px;
    font-size: 14px;
    color: #7b8a8b;
    margin-bottom: 15px;
    margin-right: 10px;
    border-radius: 5px;
    border: 1px solid #eea2a4;
    outline-color: #eea2a4;
    padding: 5px 10px;
  }

  .comment {
    resize: vertical;
    color: #7b8a8b;
    border: 1px solid #eea2a4;
    border-radius: 5px;
    outline-color: #eea2a4;
    font-size: 14px;
    padding: 10px 20px;
    background-image: url("../../../assets/image/comment-bg.png");
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    transition: all 0.5s;

    &:focus {
      background-position-y: 200px;
    }
  }

  .btn {
    border: 1px solid #eea2a4;
    background-color: #eea2a4;
    color: #ffffff;
    padding: 5px 10px;
    border-radius: 5px;
    transition: 0.3s all;
    margin: 20px auto 0px;
    display: block;

    &:hover {
      background-color: #ee7f82;
    }
  }
}
</style>
