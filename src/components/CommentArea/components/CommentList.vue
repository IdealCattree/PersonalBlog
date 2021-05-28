<template>
  <div class="comment_list_container">
    <div class="comment-item clearfix" v-for="(comment, index) in parentComment" :key="comment.id">
      <div class="parent_comment">
        <!-- 评论者头像 -->
        <Avatar v-if="comment.user_name === 'kris'" :imgUrl="url1" :size="50" />
        <Avatar v-else :imgUrl="url2" :size="50" />
        <!-- 评论信息 -->
        <div class="comment-info">
          <!-- 评论者 info -->
          <div class="user-info">
            <span class="name">{{ comment.user_name }}</span>
          </div>
          <!-- comment meta -->
          <div class="meta">
            <span class="date">{{ comment.createdAt }}</span>
            <span @click="isShowCommentForm(null, comment.id, index)" class="at">回复</span>
          </div>
          <!-- 评论 -->
          <div class="comment-content">
            {{ comment.comment }}
          </div>
          <!-- 回复内容 -->
        </div>
      </div>
      <div class="reply-list">
        <div
          class="reply-item clearfix"
          v-for="replyComment in replyComments(comment.id)"
          :key="replyComment.id"
        >
          <Avatar v-if="replyComment.user_name === 'kris'" :size="50" :imgUrl="url1" />
          <Avatar v-else :size="50" :imgUrl="url3" />
          <div class="reply-comment-info">
            <div class="user-info">
              <span class="name">{{ replyComment.user_name }}</span>
            </div>
            <div class="meta">
              <span class="date">{{ replyComment.createdAt }}</span>
              <span
                @click="isShowCommentForm(replyComment.user_name, replyComment.id, index)"
                class="at"
                >回复</span
              >
            </div>
            <div class="comment-content">
              <span>@{{ replyComment.reply_name || comment.user_name }}</span> ,
              {{ replyComment.comment }}
            </div>
          </div>
        </div>
      </div>
      <!-- 回复评论的框 -->
      <CommentForm
        v-show="isShow[index]"
        :blogId="blogId"
        :parentId="parentId"
        :parentName="parentName"
        @request="againRequest"
      />
    </div>

    <div v-if="parentComment.length === 0" class="uncomment">
      目前还没有人评论，快来做第一个评论的人吧！ (*≧ω≦)ﾉ
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import CommentForm from "./CommentForm.vue";
import url1 from "../../../assets/image/avatar.jpg";
import url2 from "../../../assets/image/avatar2.jpg";
import url3 from "../../../assets/image/avatar8.jpg";
import Avatar from "../../../components/Avatar/index.vue";
export default {
  components: {
    Avatar,
    CommentForm,
  },
  props: {
    comments: {
      type: Array,
      required: true,
    },
    blogId: {
      type: Array,
      required: true,
    },
  },

  setup(props, ctx) {
    const parentCommentRef = computed(() => props.comments.filter(item => item.parent === -1)); // 主评论
    const parentIdRef = ref(-1); //子评论的父评论的id 如果是主评论则为 -1
    const parentNameRef = ref(null); // 子评论的父评论的name 如果是主评论则为 null
    const isShowRef = ref([]);

    /**
     * 抛出重新请求评论的事件
     */
    const againRequest = () => {
      ctx.emit("request");
    };

    const replyComments = commentId => {
      return props.comments.filter(item => item.parent === commentId);
    };

    /**
     * 点击回复显示对应的commentForm
     * 并传入对应的 parentId parentName BlogId
     */
    const isShowCommentForm = (parentName, parentId, index) => {
      parentIdRef.value = parentId;
      parentNameRef.value = parentName;
      // 以下代码控制commentForm是否显示
      const result = isShowRef.value[index];
      for (let i = 0; i < isShowRef.value.length; i++) {
        isShowRef.value[i] = false;
      }
      if (!result) {
        isShowRef.value[index] = true;
      } else {
        parentIdRef.value = -1;
        parentNameRef.value = null;
      }
    };

    watch(parentCommentRef, () => {
      isShowRef.value.length = parentCommentRef.value.length;
      isShowRef.value.fill(false);
    });
    return {
      url1,
      url2,
      url3,
      parentComment: parentCommentRef,
      replyComments,
      isShowCommentForm,
      parentId: parentIdRef,
      parentName: parentNameRef,
      isShow: isShowRef,
      againRequest,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../style/var.scss";
.comment_list_container {
  margin-top: 40px;
  .comment-item {
    border-bottom: 1px dashed #f5f5f5;
    margin-bottom: 30px;
    padding-bottom: 20px;

    .parent_comment {
      display: flex;
      align-items: center;

      .comment-info {
        width: 600px;
        margin-left: 20px;

        .user-info {
          width: 600px;

          .name {
            font-size: 12px;
            color: #4c4948;
            margin-right: 10px;
            font-weight: 700;

            &:hover {
              color: #d7191a;
            }
          }

          span {
            font-size: 12px;
            color: #b3b3b3;
          }
        }

        .meta {
          font-size: 13px;
          color: #b3b3b3;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .at {
            display: inline-block;
            padding: 4px 16px;
            font-size: 14px;
            color: #ee7f82;
            border: 1px solid #ee7f82;
            border-radius: 10px;
            transition: 0.3s all;

            &:hover {
              background-color: #ee7f82;
              color: #ffffff;
            }
          }
        }

        .comment-content {
          color: #4c4948;
          font-size: 14px;
        }
      }
    }

    .reply-list {
      border-left: 1px dashed #f5f5f5;
      padding-left: 20px;
    }

    .reply-item {
      display: flex;
      align-items: center;
      margin-top: 30px;

      .reply-comment-info {
        margin-left: 20px;
        float: left;
        width: 518px;
      }

      .user-info .name {
        color: #eea2a4;
        font-weight: normal;

        &:hover {
          color: #9b3e41;
        }
      }

      .meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #b3b3b3;

        .at {
          display: inline-block;
          padding: 4px 16px;
          font-size: 14px;
          color: #ee7f82;
          border: 1px solid #ee7f82;
          border-radius: 10px;
          transition: 0.3s all;

          &:hover {
            background-color: #ee7f82;
            color: #ffffff;
          }
        }
      }

      .comment-content span {
        color: #eea2a4;

        &:hover {
          color: #9b3e41;
        }
      }
    }
  }

  .uncomment {
    text-align: center;
    color: $lightWord;
  }
}
</style>
