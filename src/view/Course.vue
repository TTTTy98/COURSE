<template>
  <div class="main">
    <searchList @searchParmas="searchParmas"/>
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

import { onMounted, ref } from 'vue';
import userApi from '../api/user'
 //请求例子
  onMounted(() => {
    
    userApi.getClassList().then(res=>{
      listData.value=res.data
    })

  })


const listData = ref([
])
const searchParmas = (e) => {
  console.log(e)
};
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
  width:100%;
  height:100%;
  overflow-y: auto; 
  margin-left:30px;
  justify-content: start;
  flex-wrap: wrap;
}

</style>