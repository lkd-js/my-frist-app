<template>
  <div class="search-container">
    <DaHeader></DaHeader>
    <div class="content-container">
      <DaList></DaList>
    </div>
    <DaFooter :index="1"></DaFooter>
  </div>
</template>

<script>
import DaList from "./searchpages/DaList.vue";
import DaHeader from "@/components/DaHeader.vue";
import DaFooter from "@/components/DaFooter.vue";

export default {
  name: "DaSearch",
  components: { DaList, DaHeader, DaFooter },
};
</script>

<style lang="scss" scoped>
.search-container {
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