<template>
  <div class="header-container">
    <div class="image-container">
      <a href="https://www.github.com/lkd-js"></a>
    </div>
    <form class="input-container">
      <input
        type="text"
        placeholder="点击前往搜索"
        @focus="toSearch"
        @keyup.enter="submit"
        v-model="title"
        ref="input"
      />
      <div class="icon-container" @click="submit">
        <van-icon name="search" />
      </div>
    </form>
  </div>
</template>

<script>
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
  },
  mounted() {
    if (this.$route.path === "/DaSearch") this.$refs.input.focus();
  },
};
</script>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  height: 0.6rem;
  padding: 0.1rem;
  background-color: #39c5bb;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .image-container {
    width: 10%;
    height: 100%;
    background: url(../../public/favicon.ico) no-repeat;
    background-size: contain;
    position: relative;
    a {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      cursor: pointer;
    }
  }
  .input-container {
    background-color: #fff;
    height: 0.4rem;
    width: 80%;
    border-radius: 0.1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    input {
      height: 100%;
      width: 80%;
      border: none;
      outline: none;
    }
    .icon-container {
      width: 10%;
      height: 100%;
      font-size: 0.2rem;
      text-align: center;
      line-height: 0.4rem;
      cursor: pointer;
    }
  }
}
</style>