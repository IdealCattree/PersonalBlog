<template>
  <div class="commentarea_container">
    <CommentHeader :total="commemtTotal" />
    <CommentForm :blogId="blogId" parentId="-1" />
    <CommentList @request="againRequest" :blogId="blogId" :comments="comments" />
  </div>
</template>

<script>
import CommentHeader from "./components/CommentHeader.vue";
import CommentForm from "./components/CommentForm.vue";
import CommentList from "./components/CommentList.vue";
import { fetcheComment } from "../../service";
import { ref } from "vue";
export default {
  components: {
    CommentHeader,
    CommentForm,
    CommentList,
  },

  props: {
    blogId: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const commentsRef = ref([]);
    const commemtTotalRef = ref(0);
    (async () => {
      const result = await fetcheComment(props.blogId);
      commentsRef.value = result.data.data;
      commemtTotalRef.value = result.data.total;
    })();

    /**
     * 重新请求评论
     */
    const againRequest = async () => {
      const result = await fetcheComment(props.blogId);
      commentsRef.value = result.data.data;
    };

    return {
      comments: commentsRef,
      commemtTotal: commemtTotalRef,
      againRequest,
    };
  },
};
</script>

<style lang="scss" scoped>
.commentarea_container {
  text-align: left;
  margin-top: 40px;
}
</style>
