<template>
  <div>
    <div class="loading-container" v-show="false">
      <van-loading type="spinner" color="#1989fa" />
    </div>
    <iframe
      v-for="url_id in music_data"
      :key="url_id.id"
      frameborder="no"
      border="0"
      marginwidth="0"
      marginheight="0"
      width="100%"
      height="86"
      :src="`//music.163.com/outchain/player?type=2&id=${url_id.id}&auto=0&height=66`"
    ></iframe>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DaMusic",
  data() {
    return {
      music_data: JSON.parse(sessionStorage.getItem("music")) || [],
    };
  },
  mounted() {
    if (this.music_data.length === 0) {
      console.log("我要请求音乐id了");
      axios
        .get(
          "https://www.fastmock.site/mock/4c1868395afc5cb85827e651cd86af9a/lkd/api/music"
        )
        .then((res) => {
          this.music_data = res.data.data.music_data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  watch: {
    music_data: {
      deep: true,
      handler(value) {
        sessionStorage.setItem("music", JSON.stringify(value));
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
}
</style>