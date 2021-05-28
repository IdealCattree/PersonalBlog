<template>
  <div class="layout_container">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="main">
      <div class="left">
        <slot></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
.layout_container {
  // width: calc(100% - 5px);
  // width: 100vw;
  // height: 100vh;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .header,
  .footer {
    flex: 0 0 auto;
    overflow: hidden;
  }
  .main {
    display: flex;
    flex: 1 1 auto;
    margin: 20px 0;
    .left {
      flex: 1;
    }
    .right {
      flex: 0;
    }
  }
}
</style>
