<template>
  <div class="container">
    <van-notice-bar mode="closeable">作者正在努力开发中......</van-notice-bar>
    <DaCarousal></DaCarousal>
    <DaTab></DaTab>
  </div>
</template>

<script>
import DaCarousal from "@/components/DaCarousal";
import DaTab from "@/components/DaTab";
export default {
  name: "DaHome",
  components: { DaCarousal, DaTab },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
</style>