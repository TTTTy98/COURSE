<template>
  <div>
    <el-card>
      <slot name="header">
        <div class="header">
          <el-button class="course-btn" @click="addCourse">add</el-button>
        </div>
      </slot>
      <el-table :data="tableData" border style="width: 100%; margin-top: 20px">
        <el-table-column prop="major" label="major" width="180" />
        <el-table-column prop="studentName" label="studentName" width="180" />
        <el-table-column prop="gpa" label="gpa" width="180" sortable />
        <el-table-column prop="grade" label="grade" width="180" sortable />
        <el-table-column prop="studyType" label="studyType" width="180" />
        <el-table-column prop="email" label="email" width="180" />
        <el-table-column prop="phone" label="phone" width="180" />
        <el-table-column
          prop="maxWorkload"
          label="maxWorkload"
          width="180"
          sortable
        />
        <el-table-column
          prop="previousExperience"
          label="previousExperience"
          width="250"
        />
        <el-table-column label="operate" width="300">
          <template #default="scope">
            <el-button
              type="success"
              size="small"
              @click="editCourse(scope.row.id)"
              v-show="ifTeacher"
              >edit</el-button
            >
            <el-button
              type="danger"
              size="small"
              @click="delCourse(scope.row.id)"
              >delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        style="margin-top: 20px"
        :current-page="searchForm.current"
        :page-size="searchForm.size"
        :page-sizes="[10, 20, 30, 40]"
        layout="->, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-card>
  </div>
</template>

<script setup>
import userApi from "../../api/user";
import { onMounted, reactive, ref, computed } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const route = useRoute();
const store = useStore();
const listData = ref([]);
// const userRole = computed(() => store.getters["roleObj"]);
const {
  query: { classId, major, studentId },
} = route;

const handleSizeChange = (size) => {
  searchForm.size = size;
  getUserList();
};
const handleCurrentChange = (current) => {
  searchForm.current = current;
  getUserList();
};
const dataQuery = () => {
  userApi.getClassList().then((res) => {
    listData.value = res.data;
  });
};
const addCourse = () => {
  router.push({ name: "CourseDetail" });
};
const delCourse = (id) => {
  userApi.classDel(id).then((res) => {
    ElMessage.success("SUCCESS!");
  });
};
const editCourse = (id) => {
  router.push({
    name: "CourseDetail",
    query: {
      courseId: id,
    },
  });
};
onMounted(() => {
  dataQuery();
  console.log("listData", listData.value);
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: end;
  align-items: center;
  .course-btn {
    margin: 0 20px;
  }
}
</style>