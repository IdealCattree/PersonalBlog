<template>
  <div class="avatar_container" :style="{ width: size + 'px', height: size + 'px' }">
    <img :src="imgUrl" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 100,
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar_container {
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
