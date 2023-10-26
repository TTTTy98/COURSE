/**
 * @Description course card
 * @Author: 
 */
<template>
  <el-card class="box-card">
    <slot name="header">
      <div class="header">
        <div class="logo">logo</div>
        <div class="title">{{ props.cardData.title }}</div>
        <div class="star">star</div>
      </div>
    </slot>
    <div class="body-box">
      <div class="body">
        {{ props.cardData.desc }}
      </div>
      <div class="footer">
        <div>{{ studentNum || 0 }} students</div>
        <div class="btn-box">
          <el-button class="course-btn" @click="clickHandler">Apply</el-button>
        </div>
      </div>
    </div>
  </el-card>
</template>
  <script setup>
import { ref, computed } from "vue";
const props = defineProps({
  cardData: {
    type: Object,
    require: true,
    default: () => {},
  },
});
const studentNum = computed(() => {
  return props.cardData.studentNumber; //TODO check fields
});
</script>

<style lang="scss" scoped>
.header {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 40px;
  font-size: 24px;
  padding-bottom: 8px;
  border-bottom: solid #e4e7ed 1px;
}
.body {
  box-sizing: border-box;
  padding: 12px 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.footer {
  box-sizing: border-box;
  width: 100%;
}
.box-card {
  box-sizing: border-box;
  width: 300px;
  height: 350px;
  margin-bottom: 24px;
}
.body-box {
  width: 100%;
  height: 270px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
:deep(.el-card__body) {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
.btn-box {
  padding-top: 12px;
  display: flex;
  justify-content: flex-end;
}
.course-btn {
  margin-left: 12px;
}
</style>