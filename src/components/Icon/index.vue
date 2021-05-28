<template>
  <i class="icon_container iconfont" :class="fontClass"></i>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const classMap = {
      home: "icon-zhuye",
      article: "icon-wenzhang",
      guidang: "icon-guidang",
      book: "icon-shu",
      about: "icon-guanyu1",
      life: "icon-shenghuo",
      heart: "icon-xin",
      wangyiyun: "icon-wangyiyunyinle",
      weixin: "icon-weixin",
      github: "icon-github",
      bilibili: "icon-bilibili",
      yuque: "icon-yuquemianlogo",
      email: "icon-jinlingyingcaiwangtubiao31",
      tag: "icon-biaoqian",
      date: "icon-rili",
      eye: "icon-liulan1",
      zan: "icon-zan",
      time: "icon-naozhong",
      simpleDate: "icon-ux13991947949968002",
      jianli: "icon-jianli",
    };
    const fontClassRef = computed(() => classMap[props.type]);
    return {
      fontClass: fontClassRef,
    };
  },
};
</script>

<style lang="scss" scoped>
.icon_container {
  color: inherit;
  font-size: inherit;
}
</style>
