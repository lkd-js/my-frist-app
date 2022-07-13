<template>
  <div class="main-container">
    <keep-alive><router-view></router-view></keep-alive>
    <div class="err">请用手机端查看</div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
html {
  font-size: 100px;
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: relative;
    font-size: 0.14rem;
    .main-container {
      height: 100%;
      width: 100%;
      .err {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        font-size: 0.4rem;
        font-weight: bolder;
        display: none;
      }
    }
  }
}
@media screen and(min-width:600px) {
  html {
    body {
      .main-container {
        width: 6rem;
        .err {
          display: block;
        }
      }
    }
  }
}
</style>
