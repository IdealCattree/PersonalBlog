<template>
  <div class="home_container">
    <Avatart :imgUrl="url" />
    <div class="content">
      <p class="info">欢迎来到刘浩男的个人主页</p>
      <p class="info">你是我一生中只会遇见一次的惊喜！</p>
      <div class="icon">
        <a v-for="item in iconList" :href="item.link">
          <Icon
            @mouseleave="handleMouseLeave"
            @mouseenter="handleMouseEnter($event)"
            :type="item.icon"
          />
          <div class="chat-info" ref="chatRef" v-if="item.isImg">
            <img src="../../assets/image/qrcode.jpg" alt="CJhaonan666" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Avatart from "../../components/Avatar/index.vue";
import Icon from "../../components/Icon/index.vue";
import url from "../../assets/image/avatar.jpg";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    Avatart,
    Icon,
  },

  setup(props, ctx) {
    document.title = "键盘钢琴家";

    const chatRef = ref(null);
    const handleMouseEnter = e => {
      const oI = e.target;
      const result = oI.className.includes("weixin");
      if (result) {
        chatRef.value.className = "chat-info hover";
      }
    };
    const handleMouseLeave = e => {
      const oI = e.target;
      const result = oI.className.includes("weixin");
      if (result) {
        chatRef.value.className = "chat-info";
      }
    };

    const iconList = [
      { isImg: false, icon: "github", link: "https://github.com/krisLiu-home" },
      { isImg: true, icon: "weixin", link: "#" },
      { isImg: false, icon: "yuque", link: "https://www.yuque.com/kris" },
      { isImg: false, icon: "bilibili", link: "https://space.bilibili.com/384143676" },
      { isImg: false, icon: "wangyiyun", link: "https://music.163.com/#/user/home?id=1384254477" },
      { isImg: false, icon: "email", link: "mailto:cjhaonan@163.com" },
    ];
    return {
      url,
      iconList,
      chatRef,
      handleMouseEnter,
      handleMouseLeave,
    };
  },
});
</script>

<style lang="scss" scoped>
.home_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
  font-size: 16px;

  .content {
    width: 490px;
    padding: 20px;
    margin: 20px auto 0;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    color: #eeeeee;
    font-weight: 600;

    .info {
      margin-bottom: 20px;
    }

    .icon {
      position: relative;
      a {
        display: inline-block;
        position: relative;

        .icon_container {
          font-size: 28px;
          font-weight: 100;
          display: inline-block;
          margin: 0 10px;

          &.icon-github {
            color: #000;
          }

          &.icon-weixin {
            color: #02bb29;
          }

          &.icon-bilibili {
            color: #ffd5e5;
          }

          &.icon-yuquemianlogo {
            color: #2cc35a;
          }

          &.icon-wangyiyunyinle {
            color: #e72d2c;
          }

          &.icon-jinlingyingcaiwangtubiao31 {
            color: #ffbf00;
          }
        }
      }
      .chat-info {
        position: absolute;
        padding: 10px;
        top: 67px;
        left: -38px;
        opacity: 0;
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 10px;
        transition: opacity 0.3s;

        &.hover {
          opacity: 1;
        }
        img {
          width: 101px;
          height: 101px;
        }

        &::after {
          content: "";
          display: block;
          width: 0;
          height: 0;
          border-width: 15px;
          border-style: solid;
          border-color: transparent transparent rgba(0, 0, 0, 0.4) transparent;
          position: absolute;
          top: -30px;
          left: 46px;
        }
      }
    }
  }
}
</style>
