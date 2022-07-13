<template>
  <div class="person-container">
    <DaHeader></DaHeader>
    <div class="content-container">
      <DaUser></DaUser>
    </div>
    <DaFooter :index="2"></DaFooter>
  </div>
</template>

<script>
import DaHeader from "@/components/DaHeader.vue";
import DaFooter from "@/components/DaFooter.vue";
import DaUser from "./userpages/DaUser.vue";
export default {
  name: "DaPerson",
  components: { DaHeader, DaFooter, DaUser },
};
</script>

<style lang="scss" scoped>
.person-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  .content-container {
    flex: 1;
    overflow-y: auto;
  }
}
</style>