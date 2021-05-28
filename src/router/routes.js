// import { getAsyncPage } from "../utils";
import store from "../store";
// import Home from "../page/Home/index.vue";
// import About from "../page/About/index.vue";
// import Resume from "../page/Resume/index.vue";
// import Website from "../page/Website";
// import Article from "../page/Article/index.vue";
// import ArticleDetail from "../page/Article/ArticleDetail.vue";
// import Login from "../page/Login/index.vue";
// import Admin from "../page/Admin/index.vue";
// import BlogList from "../page/Admin/subPage/BlogList.vue";
// import CommentList from "../page/Admin/subPage/CommentList.vue";
// import EveryDayList from "../page/Admin/subPage/EveryDayList.vue";
// import EditorEveryDay from "../page/Admin/subPage/EditorEveryDay.vue";
// import EditorBlog from "../page/Admin/subPage/EditorBlog.vue";

import nProgress from "nprogress";
window.nProgress = nProgress;
nProgress.configure({
  showSpinner: false,
  trickleSpeed: 80,
});

export default [
  {
    path: "/",
    name: "Home",
    component: async () => {
      nProgress.start();
      const page = await import("../page/Home/index.vue");
      nProgress.done();
      return page;
    },
  },
  {
    path: "/about",
    name: "About",
    component: async () => {
      nProgress.start();
      const page = await import("../page/About/index.vue");
      nProgress.done();
      return page;
    },
  },
  {
    path: "/website",
    name: "Website",
    component: async () => {
      nProgress.start();
      const page = await import("../page/Website");
      nProgress.done();
      return page;
    },
  },
  {
    path: "/resume",
    name: "Resume",
    component: async () => {
      nProgress.start();
      const page = await import("../page/Resume/index.vue");
      nProgress.done();
      return page;
    },
  },
  {
    path: "/articlelist",
    name: "Article",
    component: async () => {
      nProgress.start();
      const page = await import("../page/Article/index.vue");
      nProgress.done();
      return page;
    },
  },
  {
    path: "/articledetail/:id",
    name: "ArticleDetail",
    component: async () => {
      nProgress.start();
      const page = await import("../page/Article/ArticleDetail.vue");
      nProgress.done();
      return page;
    },
  },
  {
    path: "/login",
    name: "Login",
    component: async () => {
      nProgress.start();
      const page = await import("../page/Login/index.vue");
      nProgress.done();
      return page;
    },
  },
  {
    path: "/admin",
    name: "Admin",
    component: async () => {
      nProgress.start();
      const page = await import("../page/Admin/index.vue");
      nProgress.done();
      return page;
    },
    beforeEnter: async (to, from, next) => {
      console.log(localStorage.getItem("token"));
      await store.dispatch("user/whoAmI");
      if (store.state.user.userInfo) {
        next();
      } else {
        next("/login");
      }
    },
    children: [
      {
        path: "/bloglist",
        name: "BlogList",
        component: async () => {
          nProgress.start();
          const page = await import("../page/Admin/subPage/BlogList.vue");
          nProgress.done();
          return page;
        },
      },
      {
        path: "/commentlist",
        name: "CommentList",
        component: async () => {
          nProgress.start();
          const page = await import("../page/Admin/subPage/CommentList.vue");
          nProgress.done();
          return page;
        },
      },
      {
        path: "/everydaylist",
        name: "EveryDayList",
        component: async () => {
          nProgress.start();
          const page = await import("../page/Admin/subPage/EveryDayList.vue");
          nProgress.done();
          return page;
        },
      },
      {
        path: "/editoreveryday",
        name: "EditorEveryDay",
        component: async () => {
          nProgress.start();
          const page = await import("../page/Admin/subPage/EditorEveryDay.vue");
          nProgress.done();
          return page;
        },
      },
      {
        path: "/editorblog",
        name: "EditorBlog",
        component: async () => {
          nProgress.start();
          const page = await import("../page/Admin/subPage/EditorBlog.vue");
          nProgress.done();
          return page;
        },
      },
    ],
  },
];
