<template>
  <div class="user-container">
    <van-uploader
      v-model="fileList"
      image-fit="cover"
      multiple
      :max-count="1"
    />
    <span>用户名：小达达</span>
    <span>性别：男</span>
    <span>地区：湖北武汉</span>
    <span>登录时间：...</span>
    <div class="set-container">
      <van-icon name="setting" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DaUser",
  data() {
    return {
      fileList: [
        {
          url: "https://img01.yzcdn.cn/vant/leaf.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.user-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  van-uploader {
    border-radius: 50%;
  }
  span {
    width: 60%;
    height: 0.5rem;
    text-align: center;
    line-height: 0.5rem;
    background-color: #ccc;
    border-radius: 0.05rem;
    margin-top: 0.05rem;
  }
  .set-container {
    position: absolute;
    top: 0.03rem;
    right: 0.03rem;
    font-size: 0.3rem;
  }
}
</style>