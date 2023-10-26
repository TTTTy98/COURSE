<template>
  <div class="main">
    <searchList />
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
import { ref } from "vue";
const listData = ref([
    {
        title:110,
        desc:'asdasdasdasdasdasdad',
        studentNum:20
    },
    {
        title:110,
        desc:'asdasdasdasdasdasdad',
        studentNum:20
    },
    {
        title:110,
        desc:'asdasdasdasdasdasdad',
        studentNum:20
    },
    {
        title:110,
        desc:'asdasdasdasdasdasdad',
        studentNum:20
    },
    {
        title:110,
        desc:'asdasdasdasdasdasdad',
        studentNum:20
    },
    {
        title:110,
        desc:'asdasdasdasdasdasdad',
        studentNum:20
    },
    {
        title:110,
        desc:'asdasdasdasdasdasdad',
        studentNum:20
    },

])
</script>

<style  scoped>
.main {
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 24px;
  background: white;
  height: calc(100% - 60px);
}
.list-body {
  display: flex;
  background: white;
  width:100%;
  height:100%;
  overflow-y: auto; 
  margin-left:24px;
  justify-content: space-between;
  flex-wrap: wrap;
}

</style>