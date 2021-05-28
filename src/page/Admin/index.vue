<template>
  <div class="admin_container">
    <header class="header">
      <h1>个人空间后台管理系统</h1>
    </header>
    <div class="container">
      <ul class="nav">
        <li>
          <RouterLink to="/bloglist">博客列表</RouterLink>
        </li>
        <li><RouterLink to="/commentlist">评论列表</RouterLink></li>
        <li><RouterLink to="/everydaylist">每日一句列表</RouterLink></li>
        <li><RouterLink to="/editoreveryday">每日一句</RouterLink></li>
        <li><RouterLink to="/editorblog">写博客</RouterLink></li>
      </ul>
      <div class="page_container">
        <RouterView></RouterView>
      </div>
    </div>
    <!-- <Layout>
      <template #default> </template>
      <template #right> </template>
    </Layout> -->
  </div>
</template>

<script>
import Layout from "../../components/Layout/index.vue";
export default {
  components: {
    Layout,
  },

  setup() {
    document.title = "博客后台管理";
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/var.scss";
.admin_container {
  box-sizing: border-box;
  padding: 0 30px;

  .header {
    text-align: center;
    color: #1f2d3d;
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
  }

  .container {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }

  .nav {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    opacity: 0.8;
    border-radius: 10px;
    height: 500px;
    width: 200px;
    margin-right: 0;
    justify-content: center;
    align-items: center;
    li {
      text-align: center;
      padding: 10px;
      margin-bottom: 20px;
      border-radius: 35px;

      transition: 0.5s background-color;

      a {
        color: #5a5a5a;
      }

      &:hover {
        background-color: #80c8f8;

        a {
          color: #ffffff;
        }
      }
    }
  }

  .page_container {
    background-color: $bg;
    border-radius: 10px;
    width: 1300px;
    height: 500px;
    margin-right: 50px;
  }
}
</style>
