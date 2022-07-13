<template>
  <div class="list-container">
    <h2 v-show="info.isFirst">欢迎使用,点击搜索github用户吧</h2>
    <h2 v-show="info.isLoading">等待数据接收中</h2>
    <h2 v-show="info.errMsg">{{ info.errMsg }}</h2>
    <ul v-show="info.users.length">
      <li v-for="obj in info.users" :key="obj.id">
        <a :href="obj.html_url" target="_blank">
          <img :src="obj.avatar_url" alt="loading" />
          <span>{{ obj.login }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "DaList",
  data() {
    return {
      info: {
        isFirst: true,
        isLoading: false,
        errMsg: "",
        users: [],
      },
    };
  },
  mounted() {
    this.$bus.$on("submitObj", (objs) => {
      this.info = { ...this.info, ...objs };
      // console.log("我收到了", objs, this._data);
    });
  },
  beforeDestroy() {
    this.$bus.$off(["submitObj"]);
  },
};
</script>

<style lang="scss" scoped>
.list-container {
  width: 90%;
  overflow-y: auto;
  margin: 0 auto;
  h2 {
    text-align: center;
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    li {
      list-style: none;
      width: 40%;
      height: 1.5rem;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 0.05rem;
      margin-top: 0.1rem;

      a {
        display: block;
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: #39c5bb;
        img {
          width: 80%;
        }
      }
    }
  }
}
</style>