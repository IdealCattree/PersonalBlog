<template>
  <div class="site_aside_container">
    <div class="about-me">
      <Avatar :imgUrl="url" />
      <div class="info">
        <p class="name">Kris</p>
        <p>平安喜乐，万事胜意！</p>
      </div>
      <div class="other-link"></div>
      <RouterLink class="more" to="/about">More</RouterLink>
    </div>
    <div class="every-day">
      <span>一言</span>
      <p>{{ motto }}</p>
    </div>
  </div>
</template>

<script>
import url from "../../assets/image/avatar.jpg";
import Avatar from "../Avatar/index.vue";
import { findMotto } from "../../service";
import { ref } from "vue";
export default {
  components: {
    Avatar,
  },
  setup() {
    const mottoRef = ref("");
    (async () => {
      const result = await findMotto();
      mottoRef.value = result.data.content;
    })();
    return {
      url,
      motto: mottoRef,
    };
  },
};
</script>

<style lang="scss">
@import "../../style/var.scss";
.site_aside_container {
  width: 320px;
  margin-right: 30px;
  overflow: hidden;
}
.about-me {
  background-color: #ffffff;
  opacity: 0.8;
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 25px 19px 10px;

  .avatar_container {
    margin: 0 auto;
  }

  .info {
    text-align: center;
    margin-top: 15px;

    p {
      margin: 10px;
      color: #858585;
      &.name {
        color: #4c4948;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }

  .more {
    display: block;
    text-align: center;
    padding: 8px 30px;
    background-color: #49b1f5;
    margin-top: 20px;
    color: #eeeeee;
    transition: 0.3s all;

    &:hover {
      background-color: #ff7242;
    }
  }
}

.every-day {
  padding: 19px 19px 10px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 1px 1px 10px #5f5f5f;
  margin-bottom: 20px;
  opacity: 0.8;
  color: $lightWord;

  span {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
    color: #80c8f8;
    display: inline-block;

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 4px;
      background: #80c8f8;
      margin-top: 5px;
    }
  }

  p {
    margin-bottom: 10px;
    line-height: 1.5;
    font-size: 14px;
  }
}
</style>
