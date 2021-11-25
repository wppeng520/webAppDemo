<script lang="ts">
import { useWindowSize } from "@vant/use";
import guide_1 from "../assets/guide/2208-1.jpg";
import guide_2 from "../assets/guide/2208-2.jpg";
import guide_3 from "../assets/guide/2208-3.jpg";
import guide_4 from "../assets/guide/2208-4.jpg";
import guide_5 from "../assets/guide/2208-5.jpg";
import { Image as VanImage, Swipe, SwipeItem } from "vant";
import { ref } from "vue";

export default {
  components: {
    VanImage,
    Swipe,
    SwipeItem,
  },
  setup() {
    const { width, height } = useWindowSize();

    const SwipeIndex = ref<Number>(0);

    const onChangeSwipe = (index: Number) => {
      
      SwipeIndex.value=index;
    };

    return { width, height, guide_1, guide_2, guide_3, guide_4, guide_5, onChangeSwipe ,SwipeIndex};
  },
};
</script>

<template>
  <div class="guide">
    <Swipe class="swipe" :loop="false" @change="onChangeSwipe">
      <SwipeItem class="item">
        <VanImage :src="guide_1" :width="207" :height="368" />
      </SwipeItem>
      <SwipeItem class="item">
        <VanImage :src="guide_2" :width="207" :height="368" />
      </SwipeItem>
      <SwipeItem class="item">
        <VanImage :src="guide_3" :width="207" :height="368" />
      </SwipeItem>
      <SwipeItem class="item">
        <VanImage :src="guide_4" :width="207" :height="368" />
      </SwipeItem>
      <SwipeItem class="item">
        <VanImage :src="guide_5" :width="207" :height="368" />
      </SwipeItem>
      <template #indicator="{ active }">
        <div class="custom-indicator">
          <span
            class="point"
            :style="{ background: active == index ? '#409EFF' : '#ffffff' }"
            v-for="(item, index) in 5"
            :key="index"
          ></span>
        </div>
      </template>
    </Swipe>

    <div class="btn" v-if="SwipeIndex==4">
      <span>立即体验</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.guide {
  background: #f2f2f2;
  height: 100%;
  width: 375px;

  .swipe {
    width: 375px;
    height: 100%;
    .item {
      display: flex;
      justify-content: center;
      padding-top: 80px;
    }

    .custom-indicator {
      position: absolute;
      bottom: 30px;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;

      .point {
        background: #ffffff;
        width: 8px;
        height: 8px;
        border-radius: 8px;
        margin: 0 4px;
      }
    }
  }

  .btn {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    font-size: 16px;
    span {
      background: #409eff;
      padding: 6px 40px;
      color: #ffffff;
      border-radius: 20px;
    }
  }
}
</style>
