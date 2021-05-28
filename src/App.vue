<template>
  <div class="app" ref="appRef">
    <div class="bg"></div>
    <Layout>
      <template #header>
        <Header />
      </template>
      <template #default>
        <RouterView></RouterView>
      </template>
      <template #footer>
        <Footer />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./components/Layout/index.vue";
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";
import { provide, ref } from "vue";
export default {
  name: "App",
  components: {
    Layout,
    Header,
    Footer,
  },

  setup() {
    const appRef = ref(null);
    provide("appRef", appRef); // 子组件获取app真实dom控制滚动条
    return {
      appRef,
    };
  },
};
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  scroll-behavior: smooth;
  .bg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("./assets/image/bg.jpg");
    background-position: center;
    background-size: cover;
    z-index: -10;
  }
}
</style>
