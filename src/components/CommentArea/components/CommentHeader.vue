<template>
  <div class="comment_header_container">
    <h3 class="comment_title">留言板</h3>
    <p class="commemt_total">
      目前有
      <span>{{ total }}</span>
      条留言
    </p>
    <h4 class="comment_desc">评论一下吧</h4>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../style/var.scss";
.comment_header_container {
  border-top: 1px solid #f1f1f1;
  .comment_title {
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 10px;
  }
  .commemt_total {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 30px;

    span {
      font-size: 24px;
    }
  }
  .comment_desc {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 600;
  }
}
</style>
