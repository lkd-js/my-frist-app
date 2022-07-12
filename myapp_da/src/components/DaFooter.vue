<template>
  <div>
    <van-tabbar
      v-model="active"
      active-color="#39c5bb"
      inactive-color="#ccc"
      route
      placeholder
    >
      <van-tabbar-item replace to="/DaHome" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item replace to="/DaSearch" icon="search"
        >搜索</van-tabbar-item
      >
      <van-tabbar-item replace to="/DaPerson/DaLogin" icon="user-circle-o"
        >用户</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "DaFooter",
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>