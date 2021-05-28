<template>
  <div class="article_container">
    <Layout>
      <template #default>
        <ArticleList />
      </template>
      <template #right>
        <SiteAside />
      </template>
    </Layout>
  </div>
</template>

<script>
import SiteAside from "@/components/SiteAside/index.vue";
import Layout from "@/components/Layout/index.vue";
import ArticleList from "./components/ArticleList.vue";
export default {
  components: {
    SiteAside,
    Layout,
    ArticleList,
  },
  setup() {
    document.title = "文章列表";
  },
};
</script>

<style></style>
