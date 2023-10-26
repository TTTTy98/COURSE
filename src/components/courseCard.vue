/**
 * @Description search list
 * @Author: 
 */
<template> 

  <el-card class="box-card search-list">
    <template #header>
      <el-input
        v-model="searchValue"
        placeholder="Please input to search"
        class="input-with-select"
      >
        <template #append>
          <el-button :icon="Search" />
        </template>
      </el-input>
    </template>
    <div class="item-box">
      <div
        class="search-item"
        v-for="(item, index) in searchResult"
        :key="index"
        @click="jumpToCourse"
      >
        {{ item.value }}
      </div>
    </div>
  </el-card> 
</template>
  <script setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
const searchValue = ref("");
const searchResult = ref([
  {
    value: 12312313,
  },
  {
    value: 12312313,
  },
  {
    value: 12312313,
  },
  {
    value: 12312313,
  },
  {
    value: 12312313,
  },
  {
    value: 12312313,
  },  
  {
    value: 12312313,
  },
  {
    value: 12312313,
  },
  {
    value: "1231eq2313",
  }, 
]);

const jumpToCourse = () => {
  // jump to course
};
</script>

<style lang="scss" scoped>
.search-list {
  box-sizing: border-box;
  padding: 20px;
  width: 20%;
  max-width: 300px;
  min-width: 100px;
  height: 100%;
}
.item-box {
  overflow: auto;
  max-height: 100%;
}
.search-item {
  padding: 12px;
  text-align: center;
  cursor: pointer;
  border:solid #e4e7ed 1px;
  border-radius: 4px;
  margin:8px;
  box-shadow: 0px 0px 8px rgba(0,0,0,0.12);

}
:deep(.el-card__body) {
  height: calc(100% - 70px);
  padding: 0;
  padding-top: 16px;
}
:deep(.el-card__header) {
  padding: 0;
  padding-bottom: 16px;
}
</style>