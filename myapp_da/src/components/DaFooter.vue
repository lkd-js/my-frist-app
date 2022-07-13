<template>
  <div class="footer-container">
    <div class="icon-container" ref="0" @click="goTo('/DaHome')">
      <van-icon name="wap-home" />
    </div>
    <div class="icon-container" ref="1" @click="goTo('/DaSearch')">
      <van-icon name="search" />
    </div>
    <div class="icon-container" ref="2" @click="goTo('/DaPerson')">
      <van-icon name="manager" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DaFooter",
  props: ["index"],
  mounted() {
    this.$refs[this.index].classList.add("active");
  },
  methods: {
    goTo(path) {
      if (this.$route.path !== path) this.$router.replace(path);
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-container {
  width: 100%;
  height: 0.5rem;
  background-color: #39c5bb;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.2rem;
  color: white;
  .icon-container {
    height: 100%;
    width: 33.33%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon-container.active {
    color: aqua;
    border-top: 0.05rem solid aqua;
  }
}
</style>