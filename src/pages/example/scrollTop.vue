<script setup lang="ts">
import BackTop from "../../components/my/BackTop.vue";


</script>

<template>
  <BackTop bg-color="#E6A23C" />
  <div>顶部</div>
  <div v-for="item in 30">测试滚动到顶部</div>
</template>

<style lang="scss" scoped></style>
