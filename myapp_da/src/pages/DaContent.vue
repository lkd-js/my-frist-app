<template>
  <div class="inner-container">
    <van-nav-bar
      title="视频"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>

    <video src="../assets/mv/Hakurei Reimu.mp4" controls />
  </div>
</template>

<script>
export default {
  name: "DeContent",
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    onClickRight() {
      this.$router.replace({ name: "search" });
    },
  },
};
</script>

<style lang="scss" scoped>
.inner-container {
  height: 100%;
  width: 100%;
  video {
    width: 100%;
  }
}
</style>