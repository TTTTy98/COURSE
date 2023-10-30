/**
 * @Description course card
 * @Author: 
 */
<template>
  <el-card class="box-card">
    <slot name="header">
      <div class="header">
        <!-- <div class="logo">logo</div> -->
        <el-avatar shape="square" :src="classJpg"></el-avatar>
        <div class="title">{{ props.cardData.major }}</div>
        <div class="star"></div>
      </div>
    </slot>
    <div class="body-box">
      <div class="body">
        {{ props.cardData.stage }}
      </div>
      <div class="body">
        {{ props.cardData.remark }}
      </div>
      <div class="footer">
        <div>needed:{{ props.cardData.needed || 0 }} students</div>
        <div class="btn-box" v-show="ifStudent">
          <el-button type="primary" class="course-btn" @click="jumpToForm"
            >Apply</el-button
          >
        </div>
        <div class="btn-box" v-show="!ifStudent">
          <el-button type="primary" class="course-btn" @click="jumpToApply"
            >check</el-button
          >
        </div>
      </div>
    </div>
  </el-card>
</template>
  <script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import classJpg from "../assets/img/class.png";
import {useStore} from 'vuex'
const store = useStore()

const router = useRouter();
const userRole = computed(() => store.getters["roleObj"]);
const ifStudent = computed(() => userRole.value.isStudent);
const ifTeacher = computed(() => userRole.value.isTeacher);
const ifAdmin = computed(() => userRole.value.isAdmin);
const props = defineProps({
  cardData: {
    type: Object,
    require: true,
    default: () => {},
  },
});
const jumpToForm = () => {
  router.push({
    name: "courseForm",
    query: { classId: props.cardData.id, major: props.cardData.major },
  });
};
const jumpToApply = () => {
  router.push({
    name: "User",
    query: { classId: props.cardData.id, major: props.cardData.major },
  });
};
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
  margin-left: 24px;
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