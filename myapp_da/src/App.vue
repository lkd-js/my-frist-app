<template>
  <div>
    <DaHeader></DaHeader>
    <router-view></router-view>
    <DaFooter> </DaFooter>
    <div class="err">请用手机端查看</div>
  </div>
</template>

<script>
import DaHeader from "./components/DaHeader";
import DaFooter from "./components/DaFooter";

export default {
  name: "App",
  components: {
    DaHeader,
    DaFooter,
  },
};
</script>

<style lang="scss">
html {
  font-size: 100px;
}
body {
  font-size: 0.14rem;
}
.err {
  position: fixed;
  left: 0;
  top: 0;
  height: 100px;
  font-size: 40px;
  font-weight: bolder;
  display: none;
}
@media screen and (min-width: 600px) {
  html,
  body {
    width: 600px;
    margin: 0 auto;
  }
  .err {
    display: block;
  }
}
</style>
