<template>
  <div class="home-container">
    <DaHeader></DaHeader>
    <div class="content-container">
      <van-notice-bar mode="closeable">作者正在努力开发中......</van-notice-bar>
      <DaCarousal></DaCarousal>
      <ul class="btn-container">
        <li>
          <router-link active-class="active" to="/DaHome/DaVideo"
            ><div>视频</div></router-link
          >
        </li>
        <li>
          <router-link active-class="active" to="/DaHome/DaMusic"
            ><div>音乐</div></router-link
          >
        </li>
        <li>
          <router-link active-class="active" to="/DaHome/DaMore"
            ><div>更多</div></router-link
          >
        </li>
      </ul>
      <keep-alive><router-view></router-view></keep-alive>
    </div>
    <DaFooter :index="0"></DaFooter>
  </div>
</template>

<script>
import DaCarousal from "@/components/DaCarousal";
import DaHeader from "@/components/DaHeader.vue";
import DaFooter from "@/components/DaFooter.vue";
export default {
  name: "DaHome",
  components: { DaCarousal, DaHeader, DaFooter },
};
</script>

<style lang="scss" scoped>
.home-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  .content-container {
    flex: 1;
    overflow-y: auto;
    .btn-container {
      width: 100%;
      height: 0.4rem;
      background-color: #ccc;
      display: flex;
      justify-content: space-around;
      align-content: center;
      li {
        width: 33.33%;
        height: 100%;
        background-color: #39c5bc71;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
          display: block;
          height: 80%;
          width: 50%;
          border-radius: 0.1rem;
          background-color: #39c5bcdf;
          color: white;
          &.active {
            background-color: #39c5bb;
            color: aqua;
          }
          div {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
}
</style>