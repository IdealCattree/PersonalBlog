<template>
  <div class="header_container">
    <div class="logo">
      <RouterLink to="/">键盘钢琴家</RouterLink>
    </div>
    <ul class="nav">
      <li v-for="item in navList">
        <RouterLink exact-active-class="active" :to="item.link">
          <Icon :type="item.icon" />
          <span>{{ item.title }}</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "../Icon/index.vue";
export default {
  components: {
    Icon,
  },
  setup() {
    const navList = [
      { icon: "home", title: "主页", link: "/" },
      { icon: "guidang", title: "归档", link: "/website" },
      { icon: "book", title: "技术", link: "/articlelist" },
      { icon: "jianli", title: "简历", link: "/resume" },
      { icon: "about", title: "关于我", link: "/about" },
    ];

    return {
      navList,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/var.scss";
.header_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  font-size: 16px;
  height: 40px;
  color: #fff;
  // background: rgba(0, 0, 0, 0.3);
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent);

  .logo {
    font-weight: bold;
  }

  .nav {
    display: flex;
    li {
      a {
        position: relative;

        &::after {
          content: "";
          position: absolute;
          bottom: -6px;
          display: block;
          width: 0;
          height: 4px;
          background-color: $primaryBg;
          transition: width 0.3s;
        }
        &:hover::after {
          width: 100%;
        }
        &.active::after {
          width: 100%;
        }
      }

      margin-right: 15px;
      span {
        margin-left: 5px;
      }
    }
  }
}
</style>
