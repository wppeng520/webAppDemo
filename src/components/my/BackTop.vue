<script lang="ts">
//返回顶部组件
import { defineComponent } from "vue";

export default defineComponent({
  name: "BackTop",
  props: {
    bgColor: {
        type:String,
        default:'#0fa3fa'
    }
  },
  setup(props, { emit }) {
    const handleBackTop = () => {
      console.log("返回顶部");
      
    };

    return { handleBackTop,props };
  },
});
</script>

<template>
  <div class="backTop" :style="{background:props.bgColor}" @click="handleBackTop">
    <span class="icondemo demo-huidingbu top-icon"></span>
  </div>
</template>

<style lang="scss" scoped>
.backTop {
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 40px;
  right: 20px;
  border-radius: 100%;
  overflow: hidden;
  text-align: center;
  line-height: 40px;
  border: 1px solid #fafafa;
  .top-icon {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
