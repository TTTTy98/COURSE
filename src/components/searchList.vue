/**
 * @Description search list
 * @Author: 
 */
<template>
  <el-card class="box-card search-list">
    <template #header>
      <el-input
        v-model="searchValue"
        placeholder="Please input course names"
        class="input-with-select"
      >
        <template #append>
          <el-button :icon="Search" @click="searchParams" />
        </template>
      </el-input>
    </template>
    <div class="item-box">
      <div
        :class="{ active: item === activeStage, 'search-item': true }"
        v-for="(item, index) in searchResult"
        :key="index"
        @click="searchParams(item, index)"
      >
        {{ item }}
      </div>
    </div>
  </el-card>
</template>
  <script setup>
import { onMounted, ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import userApi from "../api/user";

const activeStage = ref("");
const searchValue = ref("");
const searchResult = ref([]);
const emits = defineEmits(["searchParams"]);
const searchParams = (item) => {
  if (item) {
    if (activeStage.value === item) {
      activeStage.value = "";
    } else {
      activeStage.value = item;
    }
  }
  emits("searchParams", {
    activeStage: activeStage.value,
    searchValue: searchValue.value,
  });
};
onMounted(() => {
  userApi.getstageList().then((res) => {
    searchResult.value = res.data;
  });
  // JSON.parse(window.localStorage.users)
});
</script>

<style lang="scss" scoped>
.search-list {
  box-sizing: border-box;
  padding: 20px;
  width: 20%;
  max-width: 400%;
  min-width: 300px;
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
  border: solid #e4e7ed 1px;
  border-radius: 4px;
  margin: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12);
  &.active {
    border-color: #a0cfff;
    color: #409eff;
    background: #ecf5ff;
  }
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