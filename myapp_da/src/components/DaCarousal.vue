<template>
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img @click="ImagePreview(images)" v-lazy="image" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { ImagePreview } from "vant";
import axios from "axios";
export default {
  name: "DaCarousal",
  data() {
    return {
      images: JSON.parse(sessionStorage.getItem("images")) || [],
    };
  },
  methods: {
    ImagePreview,
  },
  mounted() {
    if (this.images.length === 0) {
      console.log("我要请求轮播图数据了");
      axios
        .get(
          "https://www.fastmock.site/mock/4c1868395afc5cb85827e651cd86af9a/lkd/api/images"
        )
        .then((res) => {
          this.images = res.data.data.images_url;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  watch: {
    images: {
      deep: true,
      handler(value) {
        sessionStorage.setItem("images", JSON.stringify(value));
      },
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 200px;
}
</style>