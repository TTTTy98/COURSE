<template>
  <div class="main">
    <searchList @searchParams="searchParams" />
    <div class="list-body">
      <courseCard
        v-for="(item, index) in listData"
        :key="index"
        :cardData="item"
      />
    </div>
  </div>
</template>

<script setup>
import searchList from "../components/searchList.vue";
import courseCard from "../components/courseCard.vue";

import { onMounted, ref } from "vue";
import userApi from "../api/user";
const searchValue = ref("");
const activeStage = ref("");
const listData = ref([]);

const dataQuery = () => {
  const param = {
    id: "",
    major: searchValue.value,
    needed: 0,
    remark: '',
    stage: activeStage.value,
    teacherId: "",
    upi: "",
  };
  userApi.getClassList(param).then((res) => {
    listData.value = res.data;
  });
};

const searchParams = (e) => {
  console.log(123123,e)
  
  activeStage.value = e.activeStage;
  searchValue.value = e.searchValue;
  dataQuery();
};

onMounted(() => {
  dataQuery();
});
</script>

<style  scoped>
.main {
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 24px;
  background: white;
  /* height: calc(100% - 60px); */
  height: 100%;
}
.list-body {
  display: flex;
  background: white;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  margin-left: 30px;
  justify-content: start;
  flex-wrap: wrap;
}
</style>