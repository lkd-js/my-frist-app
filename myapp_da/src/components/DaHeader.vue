<template>
  <van-sticky>
    <form action="/">
      <van-search
        v-model="title"
        show-action
        placeholder="请输入搜索关键词"
        background="#39c5bb"
        shape="round"
        @focus="toSearch"
        @search="submit"
        @keyup.enter="submit"
        @cancel="onCancel"
      />
    </form>
  </van-sticky>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    toSearch() {
      if (this.$route.path !== "/DaSearch") {
        this.$router.push("/DaSearch");
      }
    },
    submit() {
      this.$bus.$emit("submitObj", {
        isFirst: false,
        isLoading: true,
      });
      axios
        .get(`https://api.github.com/search/users?q=${this.title}`)
        .then((res) => {
          // console.log("获取信息成功", res.status);
          this.$bus.$emit("submitObj", {
            isLoading: false,
            users: res.data.items,
          });
        })
        .catch((err) => {
          // console.log("获取信息失败", err.status);
          this.$bus.$emit("submitObj", {
            isLoading: false,
            errMsg: "获取信息失败" + err.status,
          });
        });
    },

    onCancel() {
      Toast("取消");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>