<template>
  <van-tabs type="card" @click="onClick" color="#39c5bb">
    <van-tab title="视频">
      <DaVideo></DaVideo>
    </van-tab>
    <van-tab title="音乐">
      <DaMusic></DaMusic>
    </van-tab>
    <van-tab title="更多">
      <DaMore></DaMore>
    </van-tab>
  </van-tabs>
</template>

<script>
import { Toast } from "vant";
import DaMusic from "../pages/homepages/DaMusic";
import DaVideo from "../pages/homepages/DaVideo";
import DaMore from "../pages/homepages/DaMore";
export default {
  name: "DaTab",
  methods: {
    onClick(_, title) {
      Toast(title);
    },
  },
  components: { DaMusic, DaVideo, DaMore },
};
</script>

<style>
</style>