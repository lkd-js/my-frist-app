<template>
  <van-grid :border="false" :column-num="2">
    <van-grid-item>
      <div class="icon-container">
        <van-icon name="play-circle-o" size="40" @click="iconPlay" />
      </div>
      <img
        src="http://tva1.sinaimg.cn/large/0072Vf1pgy1foxkiuh7a2j31hc0u0wwz.jpg"
      />
    </van-grid-item>
    <van-grid-item>
      <div class="icon-container">
        <van-icon name="play-circle-o" size="40" @click="iconPlay" />
      </div>
      <img
        src="http://tva3.sinaimg.cn/large/0072Vf1pgy1foxlof9infj31hc0u0gz4.jpg"
      />
    </van-grid-item>
    <van-grid-item>
      <div class="icon-container">
        <van-icon name="play-circle-o" size="40" @click="iconPlay" />
      </div>
      <img
        src="http://tva1.sinaimg.cn/large/0072Vf1pgy1foxkiuh7a2j31hc0u0wwz.jpg"
      />
    </van-grid-item>
    <van-grid-item>
      <div class="icon-container">
        <van-icon name="play-circle-o" size="40" @click="iconPlay" />
      </div>
      <img
        src="http://tva3.sinaimg.cn/large/0072Vf1pgy1foxlof9infj31hc0u0gz4.jpg"
      />
    </van-grid-item>
    <van-grid-item>
      <div class="icon-container">
        <van-icon name="play-circle-o" size="40" @click="iconPlay" />
      </div>
      <img
        src="http://tva1.sinaimg.cn/large/0072Vf1pgy1foxkiuh7a2j31hc0u0wwz.jpg"
      />
    </van-grid-item>
    <van-grid-item>
      <div class="icon-container">
        <van-icon name="play-circle-o" size="40" @click="iconPlay" />
      </div>
      <img
        src="http://tva3.sinaimg.cn/large/0072Vf1pgy1foxlof9infj31hc0u0gz4.jpg"
      />
    </van-grid-item>
    <van-grid-item>
      <div class="icon-container">
        <van-icon name="play-circle-o" size="40" @click="iconPlay" />
      </div>
      <img
        src="http://tva1.sinaimg.cn/large/0072Vf1pgy1foxkiuh7a2j31hc0u0wwz.jpg"
      />
    </van-grid-item>
    <van-grid-item>
      <div class="icon-container">
        <van-icon name="play-circle-o" size="40" @click="iconPlay" />
      </div>
      <img
        src="http://tva3.sinaimg.cn/large/0072Vf1pgy1foxlof9infj31hc0u0gz4.jpg"
      />
    </van-grid-item>
    <van-grid-item>
      <div class="icon-container">
        <van-icon name="play-circle-o" size="40" @click="iconPlay" />
      </div>
      <img
        src="http://tva1.sinaimg.cn/large/0072Vf1pgy1foxkiuh7a2j31hc0u0wwz.jpg"
      />
    </van-grid-item>
    <van-grid-item>
      <div class="icon-container">
        <van-icon name="play-circle-o" size="40" @click="iconPlay" />
      </div>
      <img
        src="http://tva3.sinaimg.cn/large/0072Vf1pgy1foxlof9infj31hc0u0gz4.jpg"
      /> </van-grid-item
    ><van-grid-item>
      <div class="icon-container">
        <van-icon name="play-circle-o" size="40" @click="iconPlay" />
      </div>
      <img
        src="http://tva1.sinaimg.cn/large/0072Vf1pgy1foxkiuh7a2j31hc0u0wwz.jpg"
      />
    </van-grid-item>
    <van-grid-item>
      <div class="icon-container">
        <van-icon name="play-circle-o" size="40" @click="iconPlay" />
      </div>
      <img
        src="http://tva3.sinaimg.cn/large/0072Vf1pgy1foxlof9infj31hc0u0gz4.jpg"
      />
    </van-grid-item>
  </van-grid>
</template>

<script>
export default {
  name: "DaVideo",
  methods: {
    iconPlay(e) {
      if (e.target.classList.contains("van-icon-play-circle-o")) {
        e.target.classList.remove("van-icon-play-circle-o");
        e.target.classList.add("van-icon-pause-circle-o");
        this.$router.replace("/DaContent");
      } else {
        e.target.classList.remove("van-icon-pause-circle-o");
        e.target.classList.add("van-icon-play-circle-o");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
van-grid-item {
  position: relative;
}
.icon-container {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(204, 204, 204, 0.19);
}
</style>