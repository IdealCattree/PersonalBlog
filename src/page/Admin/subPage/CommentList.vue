<template>
  <div class="commentlist_container">
    <h2 class="title">评论列表</h2>
    <ul class="comment-list">
      <li class="comment-item" v-for="comment in commentList" :key="comment.id">
        <div class="comment_title">{{ comment.user_name }}</div>
        <div class="comment">{{ comment.comment }}</div>
        <div class="date">{{ comment.createdAt }}</div>
        <button @click="deleteComment(comment.id)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import { fetcheCommentAll, deleteCommentById } from "../../../service";
export default {
  setup() {
    document.title = "评论列表";

    const commentListRef = ref([]);
    const getData = async () => {
      const result = await fetcheCommentAll();
      commentListRef.value = result.data;
    };
    getData();

    const deleteComment = async commentId => {
      const result = await deleteCommentById(commentId);
      if (result.data === 1) {
        alert("删除成功");
        await getData();
      } else {
        alert("删除失败");
      }
    };

    return {
      commentList: commentListRef,
      deleteComment,
    };
  },
};
</script>

<style lang="scss" scoped>
.commentlist_container {
  padding: 30px;
  height: 100%;
  box-sizing: border-box;

  .title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
  }

  .comment-list {
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

    .comment-item {
      margin-bottom: 10px;
      padding: 10px 50px 10px 20px;
      border-radius: 30px;

      display: flex;
      justify-content: space-between;
      align-items: center;
      &:hover {
        .comment {
          transform: translateX(30px);
          color: #80c8f8;
        }
      }

      .comment {
        font-size: 18px;
        font-weight: bold;
      }
      .comment,
      .date {
        color: #1f2d3d;
        transition: all 0.3s;
        width: 230px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .comment_title {
        color: #5a5a5a;
        width: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
