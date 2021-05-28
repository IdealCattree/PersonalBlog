<template>
  <div class="pager_container">
    <ul class="pager_list">
      <li class="pager_item" @click="changePage(current - 1)">上一页</li>
      <li
        class="pager_item"
        :class="{ active: current === page }"
        @click="changePage(page)"
        v-for="page in pages"
      >
        {{ page }}
      </li>
      <li class="pager_item" @click="changePage(current + 1)">下一页</li>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      required: true,
    },
    pageSize: {
      type: Number,
      required: 10,
    },
    visibleNumber: {
      type: Number,
      default: 5,
    },
  },

  setup(props, ctx) {
    // 总页数
    const pageNumberRef = computed(() => Math.ceil(props.total / props.pageSize));
    // 获取显示页码的最小页
    const minNumberRef = computed(() => {
      let min = props.current - Math.floor(props.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    });

    // 获取显示页码的最大页
    const maxNumberRef = computed(() => {
      let max = minNumberRef.value + props.visibleNumber - 1;
      if (max > pageNumberRef.value) {
        max = pageNumberRef.value;
      }
      return max;
    });

    // 获取显示的页码数组
    const pagesRef = computed(() => {
      let arr = [];
      for (let i = minNumberRef.value; i <= maxNumberRef.value; i++) {
        arr.push(i);
      }
      return arr;
    });

    const changePage = target => {
      if (target >= 1 && target <= pageNumberRef.value) {
        ctx.emit("change", target);
      }
    };
    return {
      pageNumber: pageNumberRef,
      minNumber: minNumberRef,
      maxNumber: maxNumberRef,
      pages: pagesRef,
      changePage,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/var.scss";
.pager_container {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  .pager_list {
    display: flex;
    .pager_item {
      user-select: none;
      height: 20px;
      line-height: 20px;
      padding: 10px;
      // box-shadow: 0 4px 8px 6px rgb(7 17 27 / 6%);
      margin: 0 10px;
      background-color: #fff;
      border-radius: 5px;
      cursor: pointer;
      font-weight: 550;
      &.active {
        color: $primary;
      }
    }
  }
}
</style>
