<template>
  <div class="website_container">
    <h2 class="header">归档</h2>
    <p class="total">
      共&nbsp;<span>{{ total }}</span>
      &nbsp;篇文章
    </p>
    <div class="article-list">
      <div class="article-year">
        <ul>
          <li class="article-item" v-for="article in articleList" :key="article.id">
            <Icon type="simpleDate" />
            <div class="date">{{ article.createdAt }}</div>
            <div class="title">
              <RouterLink :to="`/articledetail/${article.id}`">{{ article.title }}</RouterLink>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { findArticlAll } from "../../service";
import Icon from "@/components/Icon/index.vue";
export default {
  components: {
    Icon,
  },
  setup() {
    document.title = "归档";

    const articleListRef = ref([]);
    const totalRef = ref(0);

    (async function() {
      const result = await findArticlAll();
      articleListRef.value = result.data.data;
      totalRef.value = result.data.total;
    })();

    return {
      articleList: articleListRef,
      total: totalRef,
    };
  },
};
</script>

<style lang="scss" scoped>
.website_container {
  width: 960px;
  margin: 0 auto;
  background-color: #ffffff;
  opacity: 0.8;
  border-radius: 8px;
  padding: 30px;
  box-sizing: border-box;
  overflow: hidden;

  .header {
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 30px;
    color: #1f2d3d;
  }

  .total {
    color: #4c4948;
    font-size: 18px;
    margin-left: 35px;

    span {
      font-size: 20px;
    }
  }

  .article-list {
    margin-top: 40px;
    margin-left: 35px;

    .article-year {
      ul {
        border-left: 2px solid #80c8f8;

        .article-item {
          font-size: 14px;
          list-style-type: none;
          position: relative;
          margin-bottom: 15px;
          line-height: 1.5;
          padding-left: 35px;

          &::before {
            content: "";
            display: block;
            width: 9px;
            height: 9px;
            border-radius: 50%;
            background: #80c8f8;
            position: absolute;
            top: 0px;
            left: -5px;
          }

          color: #555555;

          i {
            margin-right: 5px;
            vertical-align: 2px;
          }

          .date {
            display: inline-block;
            margin-right: 15px;
            margin-bottom: 5px;
          }

          .title {
            a {
              color: #555555;
              font-size: 18px;
              font-weight: 700;
              display: inline-block;
              transition: 0.5s all;

              &:hover {
                color: #80c8f8;
                transform: translateX(15px);
              }
            }
          }
        }
      }
    }
  }
}
</style>
