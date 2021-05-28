<template>
  <div class="article_list_container">
    <section class="section" v-for="article in articleList" :key="article.id">
      <div class="title">
        <h3>
          <RouterLink :to="`/articledetail/${article.id}`">
            {{ article.title }}
          </RouterLink>
        </h3>
      </div>
      <div class="info">
        <Icon type="date" />
        <span class="article-publish"> {{ article.publishDate }}&nbsp;|&nbsp; </span>
        <Icon type="tag" />
        <span class="tags"> {{ article.tags }}&nbsp;|&nbsp; </span>
        <Icon type="eye" />
        <span class="views">
          {{ article.views }}
        </span>
      </div>
      <div class="article-content">
        {{ article.content }}
      </div>
    </section>
    <Pager
      @change="changePage"
      :total="total"
      :current="current"
      :pageSize="limit"
      :visibleNumber="10"
    />
  </div>
</template>

<script>
import Icon from "@/components/Icon/index.vue";
import Pager from "../../../components/Pager/index.vue";
import { inject, ref } from "vue";
import { findArticlBypage } from "../../../service";
export default {
  components: {
    Pager,
    Icon,
  },
  setup() {
    const articleListRef = ref([]); // 文章列表数据
    const currentRef = ref(1); // 当前页数
    const limitRef = ref(10); // 页容量
    const totalRef = ref(0); // 总页数
    const appRef = inject("appRef");
    /**
     * 获取文章列表
     */
    (async () => {
      const result = await findArticlBypage(currentRef.value, limitRef.value);
      articleListRef.value = result.data.data;
      totalRef.value = result.data.total;
      handleData(articleListRef);
    })();

    /**
     * 处理请求过来的文章列表数据
     */
    const handleData = articleListRef => {
      articleListRef.value.forEach(item => {
        item.content = item.content
          .replace(/<[a-zA-Z1-9]+.*?>|<\/[a-zA-Z0-9]*?>/g, "")
          .replace(/&nbsp;/g, " ");

        item.tags = item.tags.replace(/,/g, " ");

        item.publishDate = item.createdAt.slice(0, 10);
      });
    };

    /**
     * 更改页码
     */
    const changePage = async target => {
      currentRef.value = target;
      const result = await findArticlBypage(currentRef.value, limitRef.value);
      articleListRef.value = result.data.data;
      handleData(articleListRef);

      appRef.value.scrollTop = 0; // 更改页码时将滚动条移动到顶部
    };

    return {
      articleList: articleListRef,
      changePage,
      current: currentRef,
      limit: limitRef,
      total: totalRef,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../style/var.scss";
.article_list_container {
  position: relative;
  padding-bottom: 30px;
  padding-left: 50px;
  .section {
    // box-sizing: border-box;
    background-color: #ffffff;
    border-radius: 8px;
    padding: 40px 40px 20px;
    opacity: 0.8;
    color: #3b4351;
    width: 780px;
    margin: 0 auto 30px;

    .title {
      margin-bottom: 20px;
      font-size: 24px;
      font-weight: bold;

      a {
        color: #1f2d3d;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: inline-block;
        width: 100%;
        transition: color 0.3s;
        &:hover {
          color: $primary;
        }
      }
    }

    .info {
      margin-bottom: 10px;
      font-size: 13px;
      color: #858585;

      .icon_container {
        font-size: 12px;
        margin-right: 4px;
      }
    }

    .article-content {
      color: #4c4948;
      padding: 10px;
      height: 4em;
      overflow: hidden;
      width: 100%;

      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .turn-page ul {
    display: flex;
    justify-content: center;
    margin: 20px 0;

    li {
      padding: 10px;
      box-shadow: 0px 4px 8px 6px rgba(7, 17, 27, 0.06);
      margin: 0 10px;
      background-color: #ffffff;
      border-radius: 5px;
      cursor: pointer;
      font-weight: 550;
      list-style-type: none;

      &.active {
        color: #337ab7;
      }

      &:hover {
        color: #337ab7;
      }
    }
  }
}
</style>
