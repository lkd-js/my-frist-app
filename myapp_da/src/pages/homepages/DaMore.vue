<template>
  <div>
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item title="查看作者信息" name="1">
        雷康达 湖北武汉 1998
      </van-collapse-item>
      <van-collapse-item title="查看更多项目" name="2">
        <a href="https://webpagesofmine.neocities.org/">项目网址点我前往</a>
      </van-collapse-item>
      <van-collapse-item title="我的github" name="3"
        ><a href="https://www.github.com/lkd-js"
          >我的github:lkd-js</a
        ></van-collapse-item
      >
    </van-collapse>
  </div>
</template>

<script>
export default {
  name: "DaMore",
  data() {
    return {
      activeName: "1",
    };
  },
  mounted() {},
};
</script>

<style>
</style>